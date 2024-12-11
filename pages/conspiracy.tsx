import styles from "/src/app/mainarticle.module.css";
import Link from 'next/link';
import Image from 'next/image';
import '/src/app/globals.css';
import { UnifrakturMaguntia, Roboto, Roboto_Mono, Merriweather } from "next/font/google";

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
            <h1>The Unseen Forces Behind Conspiracy Theories: An Investigation</h1>
            <h2>In a world where misinformation spreads faster than facts, conspiracy theories have found fertile ground in human psychology and online echo chambers. Why are we drawn to these narratives, and what can we do to combat their grip on society?</h2>
        </div>
    );
}

function Visual() {
    return(
    <div className={styles.Visual}> 
        <Image src="/ct1_3x2.png" alt="Conspiracy Theories" layout="responsive" width={3} height={2}/>
        <h6></h6>
    </div>
    );
}

function Body() {
    return (
        <div className={styles.Body}>
            <h5>By Rahma</h5>
            <h6>Dec. 8, 2024</h6>
            <p>
                {`Psychologists and sociologists have spent decades dissecting the allure of these ideas. At the heart of conspiracy theories lie fundamental human traits: a need for certainty in chaotic times, a search for proportional explanations to major events, and a desire for exclusivity. These traits, when paired with the algorithms of social media, create a perfect storm for the spread of misinformation.`}
            </p>
            <h3>{`A Perfect Psychological Storm`}</h3>
            <p>
                {`The persistence of conspiracy theories can be traced to cognitive biases—mental shortcuts that influence how we process information. Confirmation bias leads people to seek out information that reinforces their beliefs while dismissing contradictory evidence. In an era of curated social media feeds, this tendency intensifies, creating echo chambers where only like-minded ideas circulate.`}
            </p>
            <p>
                {`Similarly, proportionality bias explains why major events—like the attacks of September 11—spawn elaborate theories. For many, the scale of such a tragedy feels incompatible with a simple explanation, making conspiracy theories about government involvement or "controlled demolitions" more appealing, even when evidence doesn’t support them.`}
            </p>
            <h3>{`The Emotional Pull of Conspiracies`}</h3>
            <p>
                {`Conspiracy theories aren’t just about logic—or the lack of it. They tap into deep emotional needs, offering clarity and control in uncertain times. As psychologist Karen Douglas explains, people often turn to these ideas when they feel anxious or powerless. By framing complex events as intentional plots by powerful forces, conspiracy theories transform chaos into a story with clear villains and victims.`}
            </p>
            <h3>{`The Role of Social Media`}</h3>
            <p>
                {`The digital age has accelerated the spread of these ideas. Platforms like Facebook and Twitter amplify conspiracy theories through algorithms that favor sensational and emotionally charged content. Echo chambers form, reinforcing beliefs and isolating users from opposing viewpoints. This environment is fertile ground for movements like QAnon, which blend fringe theories with political agendas and attract millions of followers.`}
            </p>
            <h3>{`Rebuilding Trust in the Age of Misinformation`}</h3>
            <p>
                {`Combating the rise of conspiracy theories requires a multi-pronged approach. Promoting media literacy is essential, helping people critically evaluate information and recognize biases. Platforms must also take greater responsibility, curbing the spread of false narratives through fact-checking and transparency.`}
            </p>
            <p>
                {`Perhaps most importantly, rebuilding trust in institutions—government, media, education—is key. Transparency and accountability can counteract the disillusionment that drives many toward conspiracy beliefs.`}
            </p>
            <p>
                {`As society grapples with this wave of misinformation, understanding the psychology behind conspiracy theories offers a way forward. By addressing the cognitive, emotional, and social factors at play, we can begin to challenge the grip of conspiracies and foster a more informed public.`}
            </p>
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

export default function Conspiracy() {
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