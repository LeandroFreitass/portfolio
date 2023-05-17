import React from "react";
import ConsignedCredit from "./Cards/ConsignedCredit";
import SaqueComple from "./Cards/SaqueComple";
import CredtCart from "./Cards/CredtCart";

import Headline from "./Headline";

const Servicos = () => {
  return (
    <div id="projetos" class="container my-12 mx-auto px-4 md:px-12">
      <div>
        <Headline title="PROJETOS" />
      </div>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <CredtCart
          image="/assets/cartão.png"
          title="Cartão de Crédito Consignado"
          titleSub="Cartão no qual o valor mínimo da fatura é descontado automaticamente do benefício do INSS."
        />
        <ConsignedCredit
          image="/assets/Crédito.png"
          title="Crédito Consignado"
          titleSub="As parcelas são descontadas automaticamente no benefício do INSS."
        />
        <SaqueComple
          image="/assets/saque-1.png"
          title="Saque Complementar"
          titleSub="Forma de usar o limite do Cartão de Crédito Consignado como um Crédito pré-aprovado. Ou seja, pode ser solicitado o saque do limite disponível no cartão."
        />
      </div>
    </div>
  );
};

export default Servicos;
