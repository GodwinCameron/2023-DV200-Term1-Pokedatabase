import React from "react";
import styles from "./Style-Stats.module.scss";
import NavBarComponent from "../NavBarComponent/NavBar-Component";

const StatsComponent = () => {
  return (
    <div className={styles.main}>
      <NavBarComponent />
      <div className={styles.heading}>
        <h1>PokéAPI has some really cool features!</h1>
        <p>See some of them below.</p>
      </div>
      <div className={styles.content}>
        <div className={styles.stats}>
          <h1>Stats of all Pokémon and their related abilities, forms and physical values</h1>
          <div className={styles.statsContent}>
            <p>
              Everything, and I mean everything is mentioned about any Pokémon here! Right down the the most minute and 
              scrupious detail. <br/> You can find info on a Pokémon's type, names (in different languages too), forms 
              and evolutions, values of their hit points, damage, defense, special attack, special defence, all of their
              abilties that can be learnt, what they can be learnt, on the topic of levels - all of the experience points 
              required for their levels, the growth rate at which their experience required pretains! There is so much 
              unbelievable data on Pokémon with this API, it will have any pationate Pokémon fan with some coding knowledge
              dying to make a game with it!
            </p>
          </div>
        </div>
        <div className={styles.stats}>
          <h1>Unique Endpoints</h1>
          <div className={styles.statsContent}>
            <p>
              Rather than just data-dumping everything in one endpoint for the developer to sift through, PokéAPI has unique 
              endpoints for each call, as well as a really nifty layout for each of their Pokémon. This really helped layout 
              some dynamic calls and with really consistent structure thereafter, definitely one of the best planned API's I've 
              worked with!
                <br/>
                <br/>
              More than 90% of my calls ended up being dynamic endpoints with reused identifiers for each set of Data I wanted 
              to display, making the code really neat and slim with very few lines in many cases.
            </p>
          </div>
        </div>
        <div className={styles.stats}>
          <h1>Lots of Sprites!</h1>
          <div className={styles.statsContent}>
            <p>
              One of the biggest things for me and my history growing up with
              Pokémon was the video games! And man is it nice to see all my
              believed 8-16bit sprites! Though a little slow paced for the overall
              design of the WebApp, I did try to include them in as many places as
              I could! 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              viverra bibendum velit, a molestie ex sagittis in. In ante ex,
              venenatis et efficitur eget, malesuada eget ligula. Nunc urna
              metus, tristique sit amet ipsum ut, dictum placerat ipsum. Nulla
              dui lacus, fringilla at nisi sed, vulputate placerat turpis. Sed
              luctus, ipsum quis lacinia hendrerit, enim mi laoreet quam, eu
              porta augue mauris id nulla. Sed dignissim condimentum eleifend.
              Quisque cursus ex purus, sit amet aliquet nisl mollis nec. Aenean
              odio mi, pulvinar a dignissim a, finibus vitae massa. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
