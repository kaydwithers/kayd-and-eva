import { Heading } from "../Heading/Heading";

export const Seating = () => {
  return (
    <div className="flex flex-col">
      <Heading>Seating</Heading>

      <div className="overflow-x-scroll md:overflow-x-visible">
        <div className="flex flex-col gap-y-6 min-w-[1200px]">
          <div className="">
            <div className="grid grid-cols-10 text-center">
              <p className="py-8">Shiny</p>
              <p className="py-8">Joan</p>
              <p className="py-8">Adele</p>
              <p className="py-8">Flynn</p>
              <p className="py-8">Kayd</p>
              <p className="py-8">Eva</p>
              <p className="py-8">Chloe</p>
              <p className="py-8">Johan</p>
              <p className="py-8">Ian</p>
              <p className="py-8">Andrew</p>
            </div>

            <div className="grid grid-cols-10 border h-24 bg-white/5"></div>

            <div className="grid grid-cols-10 text-center">
              <p className="py-8">Matt</p>
              <p className="py-8">Merv</p>
              <p className="py-8">Trevor</p>
              <p className="py-8">Aston</p>
              <p className="py-8">Antony</p>
              <p className="py-8">Haeli</p>
              <p className="py-8">Elisa</p>
              <p className="py-8">Rena</p>
              <p className="py-8">Novi</p>
              <p className="py-8">Eka</p>
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-10 text-center">
              <p className="py-8">Mark</p>
              <p className="py-8">Michael</p>
              <p className="py-8">Andrew</p>
              <p className="py-8">Chris</p>
              <p className="py-8">Thomas</p>
              <p className="py-8">Andrew</p>
              <p className="py-8">Amel</p>
              <p className="py-8">Rutika</p>
              <p className="py-8">Suppawat</p>
              <p className="py-8">Aldea</p>
            </div>

            <div className="grid grid-cols-10 border h-24 bg-white/5"></div>

            <div className="grid grid-cols-10 text-center">
              <p className="py-8">Trish</p>
              <p className="py-8">Ayesha</p>
              <p className="py-8">Jess</p>
              <p className="py-8">Tweety</p>
              <p className="py-8">Sunny</p>
              <p className="py-8">Tony</p>
              <p className="py-8">Sayeed</p>
              <p className="py-8">Gapy</p>
              <p className="py-8">Esther</p>
              <p className="py-8">Vania</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
