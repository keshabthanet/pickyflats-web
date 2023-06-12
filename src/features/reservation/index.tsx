import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { updateReservationById } from '@/database/booking';

import Loader from '@/components/Loader';
import Modal from '@/components/Modal';

import useAuthStore from '@/store/useAuthStore';

export default function ReservationEssential() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true); // true by default for loader
  const { user, isAuthenticated } = useAuthStore();
  const [reservationSucceed, setReservationSucceed] = useState(false);
  const {
    query: { reserved, reservationID, payment_intent, redirect_status },
    push,
  } = useRouter();

  //
  const handlePostReservation = async () => {
    // !TODO: reserve complete logic
    // setLoading(false)
    // update resevervation as reserved and payment status
    const isReserved = redirect_status === 'succeeded';
    try {
      await updateReservationById(reservationID, {
        reservationStatus: isReserved ? 'active' : 'draft',
        paymentStatus: isReserved ? 'paid' : 'failed',
      });

      // hide reserved flat from listing
      if (isReserved) {
        //
        setReservationSucceed(true);
      }
    } catch {
      // con
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!reserved) return;
    setOpen(true);
    if (reserved) handlePostReservation();
  }, [handlePostReservation, reserved]);

  if (!isAuthenticated) return <></>;

  const handleClose = () => {
    setOpen(false);
    push('/');
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <div className='w-full space-y-3 max-md:w-[340px] md:w-[20vw]'>
          {/* <h2 className=' text-primary-main text-2xl font-semibold'>
            Reservation
          </h2> */}
          {loading && <Loader />}
          {reservationSucceed && (
            <>
              <h3 className='text-secondary-main text-2xl font-semibold'>
                Congratulations! Flat Reserved and Payment Confirmed.
              </h3>
              <Button variant='outlined' onClick={handleClose}>
                Close
              </Button>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
