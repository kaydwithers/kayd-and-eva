import Image from "next/image";
import { Heading } from "../Heading/Heading";

export const OurStory = () => {
  return (
    <div className="">
      <Heading>Our story</Heading>

      <div className="flex flex-col gap-y-8">
        <p>
          Eva and Kayd would like to thank each of you for being here today.
          It’s an honour to have you here. As two introverts, they chose to keep
          their wedding small and personal. If you’re here, it’s because you
          hold a very special place in their lives.
        </p>
        <p>
          Eva and Kayd didn’t meet at church (as they sometimes like to joke),
          but online, in November 2022. Their first date took place in the city,
          squeezed into a tight window of time before Eva flew to Indonesia to
          visit her mother, who was unwell. Eva lived in Geelong and Kayd in
          South Melbourne. When Kayd saw Eva he couldn’t believe his luck.
        </p>
        <p>
          Kayd was nervous and knew of a couple of “cool” places to go for
          dinner. All the cool places Kayd knew were full and the two wandered
          the city together. Eva had never walked so much and was mindful of her
          departing SkyBus. Eva pointed to a modest Chinese restaurant and said,
          “Let’s just go here.” It may not have looked special from the outside,
          but it became just that—they spent the evening talking and laughing,
          mostly about dogs.
        </p>
        <p>
          Not long after, in July 2022, Kayd welcomed a Shih Tzu puppy into his
          life—one that his nephew Flynn named Cookie. Eva had been campaigning
          for a Shih Tzu for some time, and while Kayd was originally a pug
          enthusiast, he grew to like them. Cookie became an important part of
          their lives. Kayd and Eva used to go to the movies a lot and out for
          dinners. But then Cookie came along and they felt bad every time they
          left her home alone. They preferred quiet nights at home hanging out
          with her. They had a new family member and started to understand what
          it might be like to have a child. Sadly Cookie was not allowed to be
          in the room with us today but she would have liked a pat from
          everyone.
        </p>
        <p>
          Eventually, Kayd moved to Geelong to be closer to Eva. A little while
          later Chloe arrived. Eva and Kayd did think they were a bit too old
          for kids but it turned out that wasn’t true. Eva put Kayd under a lot
          of pressure to get married. Kayd didn’t like the idea of marriage,
          mostly because he did not want to throw a big wedding party and be in
          front of 100’s of people that his parents would have invited.
          Eventually Kayd realised that Eva is very special to him and decided
          to propose.
        </p>
        <p>
          Kayd proposed to Eva on their favourite Anglesea beach on January 28th
          2024. They have since moved back to Melbourne to be closer to loved
          ones. In November, Eva’s sister Elisa moved in with them. Now a
          household of four in a cozy two-bedroom apartment, they’ve created a
          home full of love, support, and the occasional chaos. They are so
          grateful for all the help that Elisa has provided. Kayd’s parents
          Adele and Trevor also help them out a lot and they are so grateful for
          all the help.
        </p>
        <p>
          Eva and Kayd are deeply grateful for the people who have walked
          alongside them on this journey—and even more grateful to share today
          with you.
        </p>

        <div className="">
          <p>With love,</p>
          <p>Eva & Kayd</p>
        </div>
      </div>

      <div className="flex gap-x-4 mt-8">
        <div className="fex">
          <Image
            src="/images/cookie.jpg"
            alt="Cookie"
            width={500}
            height={300}
          />
        </div>

        <div className="">
          <Image src="/images/chloe.jpg" alt="Chloe" width={300} height={500} />
        </div>
      </div>
    </div>
  );
};
