import styles from "/src/app/mainarticle.module.css";
import Link from 'next/link';
import Image from 'next/image';
import '/src/app/globals.css';
import { UnifrakturMaguntia, Roboto, Roboto_Mono, Merriweather } from "next/font/google";
import type { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'We can use AI in Criminal Justice, Actually',
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
            <h1>We can use AI in Criminal Justice, Actually</h1>
            <h2>{`eXplainable Artificial Intelligence can help us better understand the decisions AI models make, potentially turning these black-boxes into a powerful tool for humanity`}</h2>
        </div>
    );
}

function Visual() {
    return(
    <div className={styles.Visual}> 
        <Image src="/cj1_3x2.jpg" alt="Boy in Bronx" layout="responsive" width={3} height={2}/>
        <h6>{`eXplainable Artificial Intelligence can help us better understand the decisions AI models make, potentially turning these black-boxes into a powerful tool for humanity`}</h6>
    </div>
    );
}

function Body() {
    return (
        <div className={styles.Body}>
            <h5>By Sabeth Pathen</h5>
            <h6>Dec. 8, 2024</h6>
            <p>{`The Public has always held a negative perception of AI, for reasons good and bad. Pop culture and media has portrayed AI as a technology that will replace humans and send robots back in time to kill anyone unfortunate enough to have the last name “Connor”, and more recently, there are increasing fears of AI taking jobs from humans.`}</p>
            <p>{`Similarly, minorities have always held a negative perception of our Criminal Justice systems, but these perceptions are justified. We have a history of exploiting and abusing minorities through our national institutions. In the mid-1900s the CDC and the former HHS experimented on minorities with syphilis, leaving them untreated when there were treatments available at the time. The CIA had Project MKUltra, where the government experimented on vulnerable people (minorities and those with disabilities) to study mind control. And fresh in people’s minds are the unjust killings of black people by police.`}</p>
            <p>{`So it’s obvious that putting those two together wouldn’t be a great idea. But AI has come a long way, and new advances can not only help us with our issues with AI, but our issues with the Criminal Justice system as well. eXplainable AI (XAI) is a developing technology that allows us to understand how AI models come to decisions, with the goal of making black-box models transparent.`}</p>
            <p>{`So how does transparency solve all our problems? Transparency means that AI provides justifications for its decisions, providing reasoning for risk assessments, and reasoning can be scrutinized. This means that decisions made by AI can be treated as that of a professional human that thinks and reasons, rather than a faceless algorithm that could be the sole reason for a life-altering decision.`}</p>
            <p>{`AI can also be used to enhance human decisions. Studies show that judges can be subject to fatigue and cognitive overload, leading to an inability to accurately make decisions. AI models, trained on historical data, could make fairer decisions in scenarios like this by providing assistance to fatigued judges.`}</p>
            <p>{`But the most promising aspect of explainability is its ability to help us dissect our own biases. If AI is technology that models itself after patterns in data, and XAI allows those patterns to be explained, then XAI can help detect inherent biases in data, allowing humans to identify and rectify those biases. If data is biased, researchers should ask themselves why, and what they can do about it.`}</p>
            <p>{`However, it is crucial that there is extensive oversight to make sure that everything is ethical. Even with explainability, AI is deeply flawed and should not be allowed to have complete control over institutions as powerful as our Criminal Justice institutions. It is also important that the public have a say too. Even if the public has negative perceptions of the technology, they should have a voice in shaping how AI is used in their communities.`}</p>
            <p>{`Our Criminal Justice institutions are imperfect. So is AI technology, but it still provides an incredible opportunity for us to reflect on the underlying issues of our national institutions. But in order to do so, we need to move past the fears and start having conversations on how to implement AI ethically.`}</p>
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

export default function Ai() {
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