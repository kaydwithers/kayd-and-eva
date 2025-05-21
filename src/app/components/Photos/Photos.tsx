export const Photos = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-32">Photos</h2>

      <div className="flex flex-col gap-y-48">
        <ul>
          <li>Photos</li>
          <li>Photobooth</li>
        </ul>

        <div className="grid grid-cols-10 text-center"></div>
      </div>
    </div>
  );
};
