import { Heading } from "../Heading/Heading";

export const Seating = () => {
  return (
    <div className="flex flex-col">
      <Heading>Seating</Heading>

      <div className="overflow-x-scroll md:overflow-x-visible">
        <div className="flex flex-col gap-y-6 min-w-[1200px]">
          <div className="">
            <div className="grid grid-cols-10 text-center">
              <p className="py-8">1. Shiny</p>
              <p className="py-8">2. Joan</p>
              <p className="py-8">3. Adele</p>
              <p className="py-8">4. Flynn</p>
              <p className="py-8">5. Kayd</p>
              <p className="py-8">6. Eva</p>
              <p className="py-8">7. Chloe</p>
              <p className="py-8">8. Johan</p>
              <p className="py-8">9. Ian</p>
              <p className="py-8">10. Andrew</p>
            </div>

            <div className="grid grid-cols-10 border h-24 bg-white/5"></div>

            <div className="grid grid-cols-10 text-center">
              <p className="py-8">11. Matt</p>
              <p className="py-8">12. Merv</p>
              <p className="py-8">13. Trevor</p>
              <p className="py-8">14. Aston</p>
              <p className="py-8">15. Antony</p>
              <p className="py-8">16. Haeli</p>
              <p className="py-8">17. Elisa</p>
              <p className="py-8">18. Rena</p>
              <p className="py-8">19. Novi</p>
              <p className="py-8">20. Eka</p>
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-10 text-center">
              <p className="py-8">21. Mark</p>
              <p className="py-8">22. Michael</p>
              <p className="py-8">23. Andrew</p>
              <p className="py-8">24. Chris</p>
              <p className="py-8">25. Thomas</p>
              <p className="py-8">26. Andrew</p>
              <p className="py-8">27. Amel</p>
              <p className="py-8">28. Rutika</p>
              <p className="py-8">29. Suppawat</p>
              <p className="py-8">30. Aldea</p>
            </div>

            <div className="grid grid-cols-10 border h-24 bg-white/5"></div>

            <div className="grid grid-cols-10 text-center">
              <p className="py-8">31. Trish</p>
              <p className="py-8">32. Ayesha</p>
              <p className="py-8">33. Jess</p>
              <p className="py-8">34. Tweety</p>
              <p className="py-8">35. Sunny</p>
              <p className="py-8">36. Tony</p>
              <p className="py-8">37. Sayeed</p>
              <p className="py-8">38. Gapy</p>
              <p className="py-8">39. Esther</p>
              <p className="py-8">40. Vania</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
