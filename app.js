
function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Não encontramos resultados para sua pesquisa.</p>"
        return 
    }
    
    let resultados = "";
    let titulo = "";
    let nomelink1 = "";
    let nomelink2 = "";
    let nomelink3 = "";
    let tags = "";
    
    for(let dado of dados){
        titulo = dado.titulo.toLowerCase()
        nomelink1 = dado.nomelink1.toLowerCase()
        nomelink2 = dado.nomelink2.toLowerCase()
        nomelink3 = dado.nomelink3.toLowerCase()
        tags = dado.tags.toLowerCase()



        if (titulo.includes(campoPesquisa) || nomelink1.includes(campoPesquisa) || nomelink2.includes(campoPesquisa) || nomelink3.includes(campoPesquisa) || tags.includes(campoPesquisa)){
                
                    resultados += `
                        <div class="item-resultado">
                    
                            <h2>
                        
                                <a href="${dado.linktitulo}" target="_blank" >${dado.titulo}</a>
                                        
                            </h2>
                        
                            <p>
                                ${dado.descricao}
                            </p>
                        
                            <p>
                                ${dado.nomelink1}<a href="${dado.link1}" target="_blank" >${dado.nomejogo1}</a>
                            </p>
                    
                            <p>
                                ${dado.nomelink2}<a href="${dado.link2}" target="_blank" >${dado.nomejogo2}</a>
                            </p>
                    
                           <p>
                                ${dado.nomelink3}<a href="${dado.link3}" target="_blank" >${dado.nomejogo3}</a>
                            </p>
                    
                         </div>
                    `          
                }

        else if (!resultados){
            resultados = "<p>Não encontramos resultados para sua pesquisa.</p>"
        }
                
                section.innerHTML = resultados
        }

}



