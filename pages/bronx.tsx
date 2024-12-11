import styles from "/src/app/mainarticle.module.css";
import Link from 'next/link';
import Image from 'next/image';
import '/src/app/globals.css';
import { UnifrakturMaguntia, Roboto, Roboto_Mono, Merriweather } from "next/font/google";
import type { Metadata } from 'next'
import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="620"
      height="400"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
 
// either Static metadata
export const metadata: Metadata = {
  title: 'The Bronx is Burning',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const _unifrakturmaguntia = UnifrakturMaguntia({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-um',
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const _roboto = Roboto({
  weight: ['100', '300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const _roboto_mono = Roboto_Mono({
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const _merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
})

function Header() {
    return(
        <div className={styles.Header}>
            <Link href="/">
                <h4>The Baruch Times</h4>
            </Link>  
        </div>
    );
}

function Title() {
    return(
        <div className={styles.Title}>
            <h1>When the Bronx Burned</h1>
            <h2>{`As we look back nearly 5 decades to the night of October 12, 1977, we remember the day when, as fans cheered in Yankee Stadium watching the World Series, fire trucks blared, responding to the ever-growing fires raging through the Bronx.`}</h2>
        </div>
    );
}

function Visual() {
    return(
    <div className={styles.Visual}> 
        <Image src="/bb1_3x2.png" alt="Bronx" layout="responsive" width={3} height={2}/>
        <h6></h6>
    </div>
    );
}

function HarmanImage() {
    return(
        <div className={styles.HarmanImage}>
            {/*<Image src="/jaun1.png" alt="Map" layout="responsive" width={1168} height={705}/>*/}
            <h6>{`More than 75% of executed death row defendants were convicted of killing white victims, although African Americans make up about half of all homicide victims nationwide.`}</h6>
        </div>
    );
}

function Body() {
    return (
        <div className={styles.Body}>
            <h5>By Juan Escamilla</h5>
            <h6>Dec. 12, 2024</h6>
            <p>{`In the 1970s, the South Bronx was a symbol of neglect and urban decay. At one point, it was a strong, diverse, middle-class borough. However, poor urban planning and cruel ‘urban renewal’ policies along with heavy municipal budget cuts left the Bronx in a deep state of disrepair. Nothing is a greater symbol of this than the fires that swept through the Bronx throughout the 70s, but this decline began well before that night in Yankee Stadium.`}</p>
            <p>{`The first key turning point of the Bronx was the construction of the Cross Bronx Expressway. Masterminded by New York City planning commissioner Rober Moses, the Cross Bronx Expressway cut right through thriving neighborhoods all throughout the borough. The expressway displaced thousands of residents and businesses, separated communities, and led to a sharp decline in property values. Another aspect that contributed to this even further was ‘urban renewal’, a policy of identifying the poorest areas of a city as “blighted” to be bulldozed. This policy demolished block after block of homes, schools, and businesses to replace them with high-rise residential apartment projects disconnected from the wider neighborhood.`}</p>
            <p>{`The fall in property value, along with favorable mortgages and the increasing attractiveness of the suburbs meant that those who were well off decided to leave the Bronx for suburbs in a trend known as White Flight. Those who remained had to put up with worsening standards of living, as New York City fell into a deep financial crisis in the 70s.`}</p>
            <p>{`The final nail in the coffin was the decision by the city to massively cut funding to municipal services, including most crucially, the fire department. This opened the door for chaos, as landlords opted to resort to arson to claim insurance money and avoid financial ruin. With the fire department being severely underfunded, these fires grew out of control and by the 80s, the Bronx lost nearly 80% of their housing stock.`}</p>
            <p>{`The night of the World Series on October 12, 1977, as the Yankees played against the LA Dodgers, the fires continued to rage on. During the game, ABC’s camera panned to show the fires just a few blocks away, giving viewers across the country a real view of what was happening in the Bronx. As the camera zoomed into the ongoing fire, commentator Howard Cosell stated "There it is, ladies and gentlemen. The Bronx is burning”`}</p>
            <YoutubeEmbed embedId={`bnVH-BE9CUo`}/>
        </div> 
    );
}

function Footer() {
  return(
    <div className={styles.Footer}>
          <Link href="/"><h3>The Baruch Times</h3></Link>
      <ul>
        <li>Sabeth</li>
        <li>Harman</li>
        <li>Rahma</li>
        <li>Jaun</li>
      </ul>
    </div>
  ); 
}

export default function BronxFires() {
    return(
        <div className={styles.PageMain}>
            <Header />
            <Title />
            <Visual />
            <Body />
            <Footer />
        </div>
    );
}