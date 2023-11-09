function Home() {
  return (
    <div class="container my-6">

      <div class="space-y-9">
        <div class="flex flex-col py-6 rounded-lg px-2 bg-blue">
          <p><strong>Teste de texto na aula</strong></p>
          <p>Se vc deseja acessar nosso site 
            <a class="ml-4 p-2 transition-all rounded-lg bg-red text-black hover:bg-pink" href="https://www.cocacola.com.br">clique aqui</a>
          </p>
        </div>

        <div class="flex flex-col py-6 rounded-lg px-2 bg-blue">
          <p><strong>Teste de texto na aula</strong></p>
          <p>Se vc deseja acessar nosso site 
            <a class="ml-4 p-2 transition-all rounded-lg bg-red text-black hover:bg-pink" href="https://www.cocacola.com.br">clique aqui</a>
          </p>
        </div>
      </div>
      
      <form class="my-8 border-2 p-2 border-separate space-y-8" action="" method="post">
            <div>
                <label class="block" for="nome">Nome:</label>
                <input class="border rounded-sm p-2 outline-red" id="nome" name="nome" placeholder="Informe seu nome" required="required"></input>
            </div>
            <div>
                <label class="block" for="email">E-mail:</label>
                <input class="border rounded-sm p-2 outline-red" id="email" name="email" placeholder="Informe seu e-mail" required="required"></input>
            </div>
            <div>
                <label class="block" for="estado">Estado:</label>
                <select class="border rounded-sm p-2 " id="estado" name="estado" required="required">
                <option value="">Selecione um estado</option>
                <option value="SC">Santa Caralha</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="CR">Curitola</option>
                </select>               
            </div>

            <div class="flex space-x-3 justify-around">
              <button  class="bg-yellow focus:ring ring-orange rounded-lg p-3 transition-all hover:bg-orange" type="submit">Enviar</button>
              <button  class="bg-red rounded-lg p-3 transition-all hover:bg-pink" type="reset">Cancelar</button>
            </div>
        </form>

        <table class="border border-separate mt-12">
          <thead>
            <tr class="border border-separate">
              <th class="border">Teste 1</th>
              <th class="border">Teste 2</th>
              <th class="border">Teste 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border">Teste 1</td>
              <td class="border">Teste 2</td>
              <td class="border">Teste 3</td>
            </tr>
          </tbody>
        </table>
    </div>
    
  )
}

export default Home;
