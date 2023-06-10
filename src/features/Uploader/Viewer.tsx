/* eslint-disable @next/next/no-img-element */
interface Iprops {
  url: string;
}

export const Viewer = (props: Iprops) => {
  return (
    <div>
      <div>Image viewer</div>
      <img src={props.url} alt='' width={300} height={200} />
    </div>
  );
};
