import React from 'react';
import QuizScreen from '../../src/screens/Quiz';
import { ThemeProvider } from 'styled-components';


export default function QuizDaGaleraPage({dbExterno}) {
   return (
      <ThemeProvider theme={dbExterno.theme}>
       <QuizScreen   
       externalQuestions={dbExterno.questions} 
       externalBg={dbExterno.bg}
       />
       </ThemeProvider>
     // {/*<pre style={{color:'black'}}>
      // {JSON.stringify(props, null, 4)}
   //</pre> */}
   );
}

export async function getServerSideProps(context) {
   const dbExterno = await fetch('https://marvelquiz.rodrisoares.vercel.app/api/db')
      .then((respostaDoServer) => {
         if(respostaDoServer.ok){
            return respostaDoServer.json();
         }
         throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
      .catch((err) => {
         console.error(err);
      });

   console.log('dbExterno', dbExterno);
   console.log('Infos que o NExt da para nós', context.query.id);

   return {
      props: {
         dbExterno,
      },
   };
}