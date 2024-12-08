import styles from "./page.module.css";
import Image from 'next/image';
import Link from "next/link";

function Header() {
  return(
    <div className={styles.Header}>
      <h1>The Baruch Times</h1>
    </div>
  );
}

function HeadlineLarge({title, subheading, image, alt, article}) {
  return(
    <Link href={`/${article}`}>
    <div className={styles.HeadlineLarge}>
      <div className={styles.LargeText}>
        <h1>{title}</h1>
        <p>{subheading}</p>
      </div>
      <div className={styles.LargeImage}>
        <Image src={`/${image}`} alt={`${alt}`} layout="responsive" width={3} height={2}/>
      </div>
    </div>
    </Link>
  );
}

function HeadlineSmall({title, subheading, image, alt, article}) {
  return(
    <Link href={`/${article}`}>
    <div className={styles.HeadlineSmall}>
      <div className={styles.SmallImage}>
        <Image src={`/${image}`} alt={`${alt}`} layout="responsive" width={3} height={2}/>
      </div>
      <div className={styles.SmallText}>
        <h1>{title}</h1>
        <p>{subheading}</p>
      </div>
    </div>
    </Link>
  );
}

function SectionMain() {
  return(
    <div className={styles.SectionMain}>
      <HeadlineLarge 
        title="The Bronx is Burning! Firefighters in disarray!"
        subheading="Since the beginning of the year, there have been over 60 fires throughout the borough, and it doesn't seem to be slowing down anytime soon"
        image="bb1_3x2.jpg"
        alt="Perla Leon: Good Morning Teacher"
        article="bronx"/>
      <HeadlineLarge 
        title="Studies Show Black People are More Likely to Receive the Death Penalty than Whites"
        subheading="Our criminal justice system is known for its bias, but just how severe are the consequences?"
        image="dp1_3x2.jpg"
        alt="NPR: Virginia Repeals Death Penalty"
        article="death"/>
    </div>
  );
}

function SectionSide() {
  return(
    <div className={styles.SectionSide}>
      <HeadlineSmall
        title="Some of the wackiest conspiracy theories that will blow your mind"
        subheading="There has been a large influx of misinformation and conspiracy theories over the past few years on the internet, and some of them are downright wild!"
        image="ct1_3x2.jpg"
        alt="Public Health Post"
        article="conspiracy"/>
      <HeadlineSmall
        title="We can use AI in Criminal Justice, Actually"
        subheading="eXplainable Artificial Intelligence can help us better understand the decisions AI models make, potentially turning these black-boxes into a powerful tool for humanity"
        image="cj1_3x2.jpg"
        alt="Court"
        article="ai"/>
    </div>
  );
}


function Body() {
  return(
    <div className={styles.Body}>
      <SectionMain />
      <SectionSide />
    </div>
  );
}

function Footer() {
  return(
    <div className={styles.Footer}>    
      <h3>The Baruch Times</h3>
      <ul>
        <li>Sabeth</li>
        <li>Harman</li>
        <li>Rahma</li>
        <li>Jaun</li>
      </ul>
    </div>
  ); 
}

export default function Home() {
  return (
    <div className={styles.Home}>
      <style>@import url({`https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=UnifrakturMaguntia&display=swap`});</style>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
