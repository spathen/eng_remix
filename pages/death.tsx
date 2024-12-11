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
            <h1>Studies Show Black People are More Likely to Receive the Death Penalty than Whites</h1>
            <h2>Our criminal justice system is known for its bias, but just how severe are the consequences?</h2>
        </div>
    );
}

function Visual() {
    return(
    <div className={styles.Visual}> 
        <Image src="/dp1_3x2.jpg" alt="Boy in Bronx" layout="responsive" width={3} height={2}/>
        <h6>Our criminal justice system is known for its bias, but just how severe are the consequences?</h6>
    </div>
    );
}

function HarmanImage() {
    return(
        <div className={styles.HarmanImage}>
            <Image src="/harman.png" alt="Statistic" layout="responsive" width={837} height={757}/>
            <h6>{`More than 75% of executed death row defendants were convicted of killing white victims, although African Americans make up about half of all homicide victims nationwide.`}</h6>
        </div>
    );
}
function Body() {
    return (
        <div className={styles.Body}>
            <h5>By Harman Kahlon</h5>
            <h6>Dec. 8, 2024</h6>
            <p>{`Racial bias in America’s death penalty system remains an ongoing issue, revealing disturbing inequalities that challenge the country’s foundational principles of fairness and equal protection. These challenges exist in the cases of the death penalty, where black defendants are disproportionately sentenced to death, especially in cases involving white victims, while crimes against Black victims rarely result in the same punishment.`}</p>
            <p>{`This disparity has been highlighted by numerous studies, including the famous Baldus Study, which showed that defendants accused of killing white victims are far more likely to face execution than those whose victims are black. Baldus found that the death penalty sentencing rate for white victim cases is 24.43% whereas the sentencing rate for black victim cases is 6.10%.`}</p>
            <HarmanImage />
            <p>{`Efforts to address these issues, such as the Batson Challenge to prevent racially biased jury selection, have shown limited success. Courts often dismiss statistical evidence of systemic bias, demanding nearly impossible proof of discriminatory intent in individual cases. Socioeconomic disparities further compound the issue, with defendants of color frequently lacking adequate legal representation and racial stereotypes pushed by the media also adding to the disparity.`}</p>
            <p>{`Reforming the death penalty is extensive. Today, the death row population is over 41% black, even though black people are 13% of the population. Acknowledging systemic racism threatens the legitimacy of thousands of convictions and confronts deeply ingrained narratives about crime and race. Until systemic biases are addressed, the death penalty will remain a glaring symbol of inequality in American justice.`}</p>
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

export default function Death() {
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