import Image from "next/image";

export default function FirstPost() {
    return (<div>
        
        <h1>Hello my name is Suin Yeon</h1>
        <p> I am born in 2005 January 21st and I was born in Cheonan. I lived in Asan since I was 5 years old. My department in Hanyang University is department of information system. </p>
        <Picture/>

        
        </div>
    );
  }

  const Picture=()=>{
    return(
        <Image src ="/images/picture.jpg"
        height={400}
        width={400}
        alt="select picture" />
    );
  };
  