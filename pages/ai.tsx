import styles from "/src/app/mainarticle.module.css";
import Link from 'next/link';
import Image from 'next/image';
import '/src/app/globals.css'

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
            <h2>eXplainable Artificial Intelligence can help us better understand the decisions AI models make, potentially turning these black-boxes into a powerful tool for humanity</h2>
        </div>
    );
}

function Visual() {
    return(
    <div className={styles.Visual}> 
        <Image src="/cj1_3x2.jpg" alt="Boy in Bronx" layout="responsive" width={3} height={2}/>
        <h6>eXplainable Artificial Intelligence can help us better understand the decisions AI models make, potentially turning these black-boxes into a powerful tool for humanity</h6>
    </div>
    );
}

function Body() {
    return (
        <div className={styles.Body}>
            <h5>By Sabeth Pathen</h5>
            <h6>Dec. 8, 2024</h6>
            <p>
Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor enim porttitor cubilia taciti bibendum erat ex dui. Accumsan condimentum purus sem nisi orci. Nullam habitasse lectus nec morbi viverra. Id venenatis nisl pretium erat posuere pellentesque potenti dignissim. Bibendum magnis congue magna ante integer ultricies. Accumsan curae taciti senectus imperdiet felis commodo nibh scelerisque.
            </p>
            <p>
Quis faucibus ad nisl fames a accumsan venenatis sed habitant. Posuere commodo tincidunt vestibulum platea curabitur fermentum proin montes. Mattis mollis nulla mollis ultrices vulputate nunc accumsan ullamcorper sit. Feugiat sit ac nascetur in hac euismod vehicula dui ultricies. Velit cubilia amet hendrerit commodo ultrices lacinia. Elit efficitur vehicula sollicitudin congue adipiscing ridiculus? Purus dictum viverra tellus fames fringilla. Euismod pretium malesuada odio nam vehicula. Vivamus fringilla at tortor posuere maecenas.
            </p>
            <p>
Risus mus condimentum pretium eros et penatibus lorem mattis. Rhoncus ex mus cubilia sollicitudin suscipit turpis litora. Porttitor tincidunt sociosqu nam, lectus et tincidunt nisi rhoncus porta. Penatibus tempus vestibulum sed purus quisque suspendisse. Maecenas ullamcorper turpis ridiculus ex suspendisse. Bibendum nulla volutpat augue arcu elementum aliquam tellus. Per varius habitant elementum suscipit libero conubia convallis. Natoque orci senectus pretium gravida placerat penatibus lacinia.
            </p>
            <p>
Nec pulvinar ultrices efficitur tincidunt varius urna. Ad facilisis fringilla dui maximus hac facilisis. Nisi commodo quam venenatis fringilla venenatis. Lorem imperdiet vel magnis condimentum consectetur; pellentesque egestas. Aenean vulputate ridiculus primis lobortis mauris, nibh per. Integer primis ridiculus mattis leo varius turpis. Tincidunt risus luctus viverra, tincidunt elementum litora gravida bibendum dis.
            </p>
            <p>
Praesent lobortis porttitor in ultrices gravida mauris senectus suspendisse. Duis ut nunc ut senectus egestas purus. Facilisi egestas volutpat diam torquent massa nisl suscipit mi. Porta nascetur vehicula ornare platea eu. Potenti aenean platea senectus risus lobortis tristique arcu scelerisque donec. Quam montes sed dictumst iaculis molestie est ridiculus inceptos volutpat. Natoque sit malesuada varius lorem interdum elementum nullam. Maximus placerat aptent tortor magnis platea rutrum. Lacinia aliquam cras orci euismod massa suspendisse odio duis.
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

export default function Ai() {
    return(
        <div className={styles.PageMain}>
            <style>@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=UnifrakturMaguntia&display=swap');</style>
            <Header />
            <Title />
            <Visual />
            <Body />
            <Footer />
        </div>
    );
}