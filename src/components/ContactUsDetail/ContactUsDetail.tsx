import { ContactsList } from "./style";
import { LiElement } from "./LiElement";

export const ContactUsDetail = () => {
  return (
    <ContactsList>
      <LiElement title="Phone" content="+1 234 567 89" link="tel:+123456789" />
      <LiElement
        title="Email"
        content="default.email@gmail.com"
        link="mailto:default.email@gmail.com"
      />
      <LiElement
        title="Address"
        content={
          <>
            400 first ave. <br /> suite 700 <br /> Minneapolis, MN 55401
          </>
        }
        link="https://www.google.com/maps/place/McDonald's/@49.2260497,28.4038935,2001m/data=!3m1!1e3!4m6!3m5!1s0x472d5c681dcd7613:0x8af16ef4059f13c1!8m2!3d49.22605!4d28.4125814!16s%2Fg%2F11btwt6s3z?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
      />
    </ContactsList>
  );
};
