import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { UnifrakturMaguntia, Roboto, Roboto_Mono, Merriweather } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unifrakturmaguntia = UnifrakturMaguntia({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-um',
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _roboto = Roboto({
  weight: ['100', '300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _roboto_mono = Roboto_Mono({
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
})

function Header() {
  return (
    <div className={styles.Header}>
      <h1>The Baruch Times</h1>
    </div>
  );
}

function HeadlineLarge({ title, subheading, image, alt, article }) {
  return (
    <Link href={`/${article}`}>
      <div className={styles.HeadlineLarge}>
        <div className={styles.LargeText}>
          <h1>{title}</h1>
          <p>{subheading}</p>
        </div>
        <div className={styles.LargeImage}>
          <Image src={`/${image}`} alt={`${alt}`} layout="responsive" width={3} height={2} />
        </div>
      </div>
    </Link>
  );
}

function HeadlineSmall({ title, subheading, image, alt, article }) {
  return (
    <Link href={`/${article}`}>
      <div className={styles.HeadlineSmall}>
        <div className={styles.SmallImage}>
          <Image src={`/${image}`} alt={`${alt}`} layout="responsive" width={3} height={2} />
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
  return (
    <div className={styles.SectionMain}>
      <HeadlineLarge
        title="The Bronx is Burning! Firefighters in disarray!"
        subheading="Since the beginning of the year, there have been over 60 fires throughout the borough, and it doesn't seem to be slowing down anytime soon"
        image="bb1_3x2.jpg"
        alt="Perla Leon: Good Morning Teacher"
        article="bronx"
      />
      <HeadlineLarge
        title="Studies Show Black People are More Likely to Receive the Death Penalty than Whites"
        subheading="Our criminal justice system is known for its bias, but just how severe are the consequences?"
        image="dp1_3x2.jpg"
        alt="NPR: Virginia Repeals Death Penalty"
        article="death"
      />
    </div>
  );
}

function SectionSide() {
  return (
    <div className={styles.SectionSide}>
      <HeadlineSmall
        title="Some of the wackiest conspiracy theories that will blow your mind"
        subheading="There has been a large influx of misinformation and conspiracy theories over the past few years on the internet, and some of them are downright wild!"
        image="ct1_3x2.jpg"
        alt="Public Health Post"
        article="conspiracy"
      />
      <HeadlineSmall
        title="We can use AI in Criminal Justice, Actually"
        subheading="eXplainable Artificial Intelligence can help us better understand the decisions AI models make, potentially turning these black-boxes into a powerful tool for humanity"
        image="cj1_3x2.jpg"
        alt="Court"
        article="ai"
      />
    </div>
  );
}

function Body() {
  return (
    <div className={styles.Body}>
      <SectionMain />
      <SectionSide />
    </div>
  );
}

function Footer() {
  return (
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
          <Header />
          <Body />
          <Footer />
        </div>
  );
}
