import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

interface SnackbarStore {
  snackbarOpen: boolean;
  snackbarContent: string;
  snackbarSeverity: SnackbarSeverity;
  setSnackbarOpen: (isOpen: boolean) => void;
  openSnackbar: (content: string, severity?: SnackbarSeverity) => void;
}

const useSnackbarStoreBase = create<SnackbarStore>((set) => ({
  snackbarOpen: false,
  snackbarContent: '',
  snackbarSeverity: 'success',
  setSnackbarOpen: (isOpen) => set(() => ({ snackbarOpen: isOpen })),
  openSnackbar: (content, severity = 'success') => {
    set(() => ({
      snackbarContent: content,
      snackbarSeverity: severity,
      snackbarOpen: true,
    }));
  },
}));

const useSnackbarStore = createSelectorHooks(useSnackbarStoreBase);

export default useSnackbarStore;
