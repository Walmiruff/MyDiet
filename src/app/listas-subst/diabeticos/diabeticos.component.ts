import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diabeticos',
  templateUrl: './diabeticos.component.html',
  styleUrls: ['./diabeticos.component.scss']
})
export class DiabeticosComponent implements OnInit {

  public acucares;
  public carnes;
  public cereal;
  public frutas;
  public leguminosas;
  public leites;
  public oleaginosas;
  public oleos;
  public verduras;


  constructor() { }

  ngOnInit(): void {
    this.acucares = [
      { label: 'Achocolatado diet', value: '2 colheres de sopa' },
      { label: 'Bananinha diet', value: '1 unidade (20g)	' },
      { label: 'Bombom diet', value: '1 unidade' },
      { label: 'Chocolate diet', value: '10 gramas' },
      { label: 'Cocada diet', value: '1 unidade' },
      { label: 'Doce de leite cremoso', value: '2 colheres de sopa' },
      { label: 'Doce de mamão verde diet', value: '2 colheres sopa (20g cada)' },
      { label: 'Frutas em calda diet', value: '1/2 porção de referencia da fruta' },
      { label: 'Gelatina diet', value: '100 ml' },
      { label: 'Geleia diet', value: '3 colheres de sobremesa' },
      { label: 'Goiabada diet', value: '1 fatia fina (20g)' },
      { label: 'Picolé de frutas diet', value: '1 unidade	' },
      { label: 'Pudim de Leite condensado diet', value: '1 fatia' },
      { label: 'Sorvete de massa diet', value: '1 bola' }
    ]

    this.carnes = [
      { label: 'Almôndegas assadas', value: '3 unidades' },
      { label: 'Atum em lata', value: '3 colheres de sopa' },
      { label: 'Bacalhoada', value: '1 colher de servir' },
      { label: 'Bife de fígado grelhado', value: '1 unidade' },
      { label: 'Bife enrolado', value: '1 unidade' },
      { label: 'Bife grelhado', value: '1 unidade' },
      { label: 'Blanquet de peru', value: '10 fatias' },
      { label: 'Camarão cozido', value: '20 unidades pequenas' },
      { label: 'Carne assada', value: '1 fatia' },
      { label: 'Carne moída', value: '5 colheres de sopa' },
      { label: 'Coxa assada', value: '1 unidade' },
      { label: 'Filé de frango grelhado', value: '1 filé médio' },
      { label: 'Lombo de porco assado', value: '1 fatia' },
      { label: 'Majuba cozida', value: '10 unidades' },
      { label: 'Merluza cozida', value: '2 filés' },
      { label: 'Omelete simples', value: '1 a 2 ovos' },
      { label: 'Ovo de codorna', value: '10 unidades' },
      { label: 'Ovo pochê, cozido, omelete', value: '1 a 2 unidades' },
      { label: 'Salmão', value: '1 filé' },
      { label: 'Sardinha em conserva', value: '1 unidade' },
      { label: 'Sardinha escabeche', value: '1 unidade' },
      { label: 'Sobrecoxa assada sem pele', value: '1 unidade' },
    ]

    this.cereal = [
      { label: 'Amido de Milho', value: '2 1/2 colheres de sopa' },
      { label: 'Angu', value: '3 colheres de sopa' },
      { label: 'Arroz branco', value: '4 colheres de sopa' },
      { label: 'Arroz integral', value: '4 colheres de sopa' },
      { label: 'Aveia', value: '3 colheres de sopa' },
      { label: 'Barra de Cereais diet', value: '1 unidade' },
      { label: 'Batata Inglesa picada', value: '3 colheres de sopa' },
      { label: 'Batata pequena cozida', value: '2 unidades' },
      { label: 'Batata Sauteé', value: '2 1/2 colheres de servir' },
      { label: 'Batata-doce cozida', value: '1 unidade pequena' },
      { label: 'Biscoito Água', value: '5 unidades' },
      { label: 'Biscoito Água e sal', value: '4 unidades' },
      { label: 'Biscoito Cream Cracker', value: '6 unidades' },
      { label: 'Biscoito de Leite', value: '6 unidades' },
      { label: 'Biscoito Integral', value: '8 unidades' },
      { label: 'Biscoito Maisena', value: '7 unidades' },
      { label: 'Biscoito salgado (Pacote individual)', value: '1 unidade' },
      { label: 'Biscoito salgado (Pacote individual)', value: '1 unidade' },
      { label: 'Broa de milho pequena', value: '1 unidade' },
      { label: 'Cereal matinal s/ açúcar', value: '1 xícara de chá' },
      { label: 'Farinha de aveia', value: '2 colheres de sopa' },
      { label: 'Farinha de mandioca', value: '2 colheres de sopa' },
      { label: 'Farinha de milho', value: '3 colheres de sopa' },
      { label: 'Farinhas', value: '2 colheres de sopa' },
      { label: 'Farofa de mandioca', value: '1/2 colher de servir' },
      { label: 'Granola s/ açúcar', value: '5 colheres de sopa' },
      { label: 'Inhame / cará cozido', value: '3 colheres de sopa' },
      { label: 'Inhame cozido/amassado', value: '3 colheres de sopa' },
      { label: 'Macarrão cozido', value: '1 pegador' },
      { label: 'Mandioca cozida', value: '1 unidade pequena' },
      { label: 'Mandioquinha', value: '1 unidade média' },
      { label: 'Milho em grão', value: '6 colheres de sopa' },
      { label: 'Milho verde em espiga', value: '1 unidade' },
      { label: 'Nhoque de batata', value: '3 colheres de sopa' },
      { label: 'Pamonha', value: '1 unidade' },
      { label: 'Pão caseiro s/ gordura', value: '1 fatia pequena' },
      { label: 'Pão de centeio', value: '2 fatias' },
      { label: 'Pão de forma integral', value: '2 fatias' },
      { label: 'Pão de Hot-Dog integral', value: '1 unidade' },
      { label: 'Pão francês integral s/miolo', value: '1 unidade' },
      { label: 'Pão light', value: '2 fatias' },
      { label: 'Pão sírio', value: '1 unidade' },
      { label: 'Pão tipo bisnaquinha integral', value: '3 unidades' },
      { label: 'Pipoca', value: '2 xícaras de chá' },
      { label: 'Polenta cozida', value: '2 colheres de sopa' },
      { label: 'Purê', value: '3 colheres de sopa' },
      { label: 'Torrada integral', value: '4 unidades' },
    ]

    this.frutas = [
      { label: 'Abacate (amassado)', value: '2 colheres de sopa' },
      { label: 'Abacaxi', value: '1 fatia' },
      { label: 'Acerola', value: '16 unidades' },
      { label: 'Ameixa seca', value: '3 unidades' },
      { label: 'Ameixa vermelha', value: '2 unidades médias' },
      { label: 'Atemóia (fruta do conde)', value: '1/2 unidade' },
      { label: 'Banana', value: '1 unidade média' },
      { label: 'Caju', value: '2 unidades' },
      { label: 'Caqui chocolate', value: '1 unidade pequena' },
      { label: 'Caqui Rama forte', value: '1 unidade' },
      { label: 'Carambola', value: '2 unidades' },
      { label: 'Cereja', value: '4 unidades' },
      { label: 'Damasco seco', value: '3 unidades' },
      { label: 'Figo', value: '2 unidades pequenas' },
      { label: 'Goiaba', value: '1 unidade pequena' },
      { label: 'Jabuticaba', value: '20 unidades' },
      { label: 'Jaca', value: '4 baços' },
      { label: 'Kiwi', value: '2 unidades' },
      { label: 'Laranja', value: '1 unidade' },
      { label: 'Limão', value: '3 unidades' },
      { label: 'Maçã', value: '1 unidade' },
      { label: 'Mamão formosa', value: '1 fatia média' },
      { label: 'Mamão papaia', value: '1/2 unidade' },
      { label: 'Manga', value: '1 unidade pequena' },
      { label: 'Maracujá polpa', value: '3 colheres de sopa' },
      { label: 'Melancia', value: '1 fatia média' },
      { label: 'Melão', value: '1 fatia grande' },
      { label: 'Mexerica', value: '1 unidade' },
      { label: 'Morango / Pitanga', value: '10 unidades pequenas' },
      { label: 'Nectarina', value: '2 unidades' },
      { label: 'Pêra', value: '1 unidade pequena' },
      { label: 'Pêssego', value: '2 unidades pequenas' },
      { label: 'Pinhão', value: '5 unidades' },
      { label: 'Salada de fruta', value: '1/2 xícara de chá' },
      { label: 'Suco de fruta', value: '1/2 copo da polpa' },
      { label: 'Tamarindo', value: '10 unidades' },
      { label: 'Uva Itália/Rubi', value: '8 unidades' },
      { label: 'Uva passa', value: '1 colher de sopa' },
      { label: 'Uva Thompson', value: '32 bagos' },
    ]

    this.leguminosas = [
      { label: 'Ervilha fresca', value: '3 colheres de sopa' },
      { label: 'Ervilha seca cozida', value: '2 1/2 colher de sopa' },
      { label: 'Feijão cozido com caldo', value: '1 concha' },
      { label: 'Feijão cozido só grãos', value: '1 1/2 colher de sopa' },
      { label: 'Grão-de-bico', value: '2 colheres de sopa' },
      { label: 'Lentilha', value: '2 colheres de sopa' },
      { label: 'Proteína de soja texturizada', value: '1 e 1/2 xícara de chá' },
      { label: 'Soja cozida', value: '4 colheres de sopa' },
    ]

    this.leites = [
      { label: 'Coalhada fresca', value: '1/2 xícara de chá' },
      { label: 'Cream Cheese light', value: '1 e 1/2 colher de sopa' },
      { label: 'Iogurte desnatado', value: '1 copo de 200 mL' },
      { label: 'Leite de cabra integral', value: '1 copo de 200 ml' },
      { label: 'Leite desnatado ou de soja', value: '1 copo de 200 mL' },
      { label: 'Leite em pó desnatado', value: '3 colheres de sopa' },
      { label: 'Leite em pó integral', value: '2 colheres de sopa' },
      { label: 'Leite semidesnatado', value: '1 copo de 200 mL' },
      { label: 'Queijo cottage', value: '4 colheres de sopa' },
      { label: 'Queijo fresco tipo minas', value: '1 fatia média' },
      { label: 'Queijo pasteurizado', value: '2 unidades (30g)' },
      { label: 'Queijo ricota', value: '1 fatia grossa' },
      { label: 'Requeijão', value: '1 colher de sopa' },
    ]

    this.oleaginosas = [
      { label: 'Amêndoa', value: '9 unidades' },
      { label: 'Amêndoa triturada', value: '1 colher de sopa' },
      { label: 'Amendoim torrado', value: '22 unidades' },
      { label: 'Avelã', value: '10 unidades' },
      { label: 'Castanha de caju', value: '4 unidades' },
      { label: 'Castanha de caju triturada', value: '1 colher de sopa' },
      { label: 'Castanha do Brasil', value: '2 unidades' },
      { label: 'Macadâmia', value: '3 unidades' },
      { label: 'Nozes', value: '4 unidades' },
      { label: 'Nozes trituradas', value: '1 colher de sopa' },
    ]

    this.oleos = [
      { label: 'Azeite de dendê', value: '3/4 colher de sopa' },
      { label: 'Azeite de oliva', value: '1 colher de sopa' },
      { label: 'Maionese O% colesterol', value: '1 colher de sopa' },
      { label: 'Manteiga', value: '1/2 colher de sopa' },
      { label: 'Margarina light', value: '1 ponta de faca' },
      { label: 'Óleo vegetal', value: '1 colher de sopa' },
    ]

    this.verduras = [
      { label: 'Abóbora cozida', value: '2 colheres de sopa' },
      { label: 'Abobrinha cozida', value: '3 colheres de sopa' },
      { label: 'Acelga cozida', value: '2 1/2 colheres de sopa' },
      { label: 'Acelga crua picada', value: '9 colheres de sopa' },
      { label: 'Agrião', value: '22 ramos' },
      { label: 'Aipo cru', value: '2 unidades' },
      { label: 'Alcachofra cozida', value: '1/4 de unidade' },
      { label: 'Alface americana', value: '6 folhas' },
      { label: 'Alface lisa', value: '11 folhas' },
      { label: 'Almeirão', value: '5 folhas' },
      { label: 'Aspargo em conserva', value: '8 unidades' },
      { label: 'Aspargo fresco cozido', value: '7 unidades' },
      { label: 'Berinjela cozida', value: '2 colheres de sopa' },
      { label: 'Beterraba crua ralada', value: '2 colheres de sopa' },
      { label: 'Beterrada cozida', value: '2 colheres de sopa' },
      { label: 'Brócolis cozido', value: '4 colheres de sopa' },
      { label: 'Broto de Alfafa cru', value: '1 xícara' },
      { label: 'Broto de Bambu', value: '1 unidade' },
      { label: 'Broto de feijão cozido', value: '1 colher de servir' },
      { label: 'Cenoura cozda (fatias)', value: '7 unidades' },
      { label: 'Cenoura cozida (picada)', value: '1 1/2 colheres de sopa' },
      { label: 'Cenoura crua (picada)', value: '1 colher de servir' },
      { label: 'Chuchu cozido', value: '2 colheres de sopa' },
      { label: 'Cogumelo em conservas', value: '9 unidades' },
      { label: 'Couve de Bruxelas', value: '2 1/2 unidades' },
      { label: 'Couve flor cozida', value: '3 ramos' },
      { label: 'Couve manteiga cozida', value: '1 colher de servir' },
      { label: 'Escarola', value: '10 folhas' },
      { label: 'Espinafre cozido', value: '2 colheres de sopa' },
      { label: 'Jiló cozido', value: '1 1/2 colher de sopa' },
      { label: 'Mostarda', value: '6 folhas' },
      { label: 'Palmito em conserva', value: '2 unidades' },
      { label: 'Pepino Japonês', value: '1 unidade' },
      { label: 'Pepino picado', value: '4 colheres de sopa' },
      { label: 'Picles em conserva', value: '5 colheres de sopa' },
      { label: 'Pimentão cru fatiado', value: '8 fatias' },
      { label: 'Pimentão cru picado', value: '2 colheres de sopa' },
      { label: 'Quiabo cozido', value: '2 colheres de sopa' },
      { label: 'Rabanete', value: '3 unidades' },
      { label: 'Repolho cru picado', value: '5 colheres de sopa' },
      { label: 'Rúcula', value: '15 ramos' },
      { label: 'Salsão cru', value: '5 colheres de sopa' },
      { label: 'Tomate caqui', value: '2 fatias' },
      { label: 'Tomate cereja', value: '7 unidades' },
      { label: 'Tomate comum', value: '4 fatias' },
      { label: 'Vagem cozida', value: '2 colheres de sopa' },
    ]
  }

}














