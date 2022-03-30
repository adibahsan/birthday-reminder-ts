import React from "react";

export const BirthdayList = ({ people }: any) => {
  return (
    <>
      {people.map((item: any) => {
        console.log(item);
        const { id, name, age, image } = item;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};
