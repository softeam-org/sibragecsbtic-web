import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'

function Desafio() {
    return (
        <Container color="nord6">

            <div className='text-nord1 text-md font-semibold pt-2 text-lg'>
                <SectionTitle title={"Desafio SIBRAGEC+SBTIC"} />

                <div className="w-100 flex flex-col items-center justify-center">
                    <p className=" text-nord1 text-md font-semibold">O II Desafio SIBRAGEC+SBTIC para Estudantes é uma iniciativa desenvolvida pelo Grupo de Trabalho de Gestão e Economia da Construção (GT GEC) e de Tecnologia da Informação e Comunicação (GT TIC) da Associação Nacional de Tecnologia do Ambiente Construído (ANTAC). Trata-se de um desafio de ideias no qual equipes de até 4 estudantes competem entre si para desenvolverem, em curto período, uma ideia inovadora para um determinado desafio real.</p>
                </div>
                <br />
                <div>
                    <p> Empresas do ambiente da construção civil de Aracaju-SE lançarão desafios a partir da observação da realidade, tendo as equipes a oportunidade de pensar colaborativamente em soluções inovadoras que possam ser implementadas pelas empresas.
                    </p>
                </div>
                <br />
                <div>
                    <p> O Edital de Participação será lançado em breve com as diretrizes, datas importantes e mais informações sobre a atividade.
                        Monte sua equipe e participe deste desafio!
                    </p>
                </div>
                <br />
                <div>
                    <p>
                        O Edital de Participação será lançado em breve com as diretrizes, datas importantes e mais informações sobre a atividade.
                        Monte sua equipe e participe deste desafio!

                    </p>
                    <br />

                    <p>
                        A submissão deverá ser realizada exclusivamente por e-mail:  <a
                            href="https://evento.ufal.br/sibragec2021/submissao/desafio-1"
                            className="text-orange-500 text-underline"
                        >
                            https://evento.ufal.br/sibragec2021/submissao/desafio-1
                        </a>
                    </p>
                </div>
            </div>
        </Container>

    )
}

export default Desafio