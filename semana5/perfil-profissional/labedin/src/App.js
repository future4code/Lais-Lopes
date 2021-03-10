import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Laís Maaséias Lopes"
          descricao="Entusiasta na Te cnologia da Informação, tenho me dedicado nos últimos dois anos aos estudos e aprimoramento de programação front-end back end mobile. 
          Dentre as oportunidades ao longo deste período, pude vivenciar conhecimento e prática em plataformas em nuvem e metodologias ágeis. Vivo para desafios propostos através de hackathons e busco o aprimoramento contínuo através de bootcamps."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Email"
          descricao="labedIn@labedIn.com.br."
        />

        <CardPequeno
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Endereço"
          descricao="Rua sem fim, nº0 Bairro: Bom Sucesso Cidade: São Paulo-SP CEP:00 010-000"
        />
      </div>

      <div className="page-section-container">
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Liberty Seguros"
          descricao="Analista Técnico de Sinistros: 
          Atendimento ao segurado/terceiro/corretor via chat e pré análise de sinistros  (ramos: automóveis, carga nos modais aéreo, marítimo e terrestre, vida), tratativas de exceções de sinistro e vistoria prévia."
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="Vivo Telecomunicações (Corporativo)"
          descricao="Instrutora de Treinamento; Gestão de Processos e Gestão de Pessoa:</b> Roaming Nacional e Internacional; Faturamento; Planos Empresariais; Suporte  Técnico; Contratos (Locação; Venda; Empréstimo; Doação; Comodato)."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
