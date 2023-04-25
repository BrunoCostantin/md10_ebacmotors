$(document).ready(function() { 
    $("#carousel-imagens").slick({ // adiciona o efeito carousel depois do colicar todos os scripts ali de cima
        autoplay: true, // para colocar os slides rodando sozinhos
    }) 

    $(".menu-hamburguer").click(function (){
        $("nav").slideToggle() // quando clicarmos ele aciona o slidedown e o slideup atrvés do slide toggle
    })

    $("#telefone").mask("(00) 00000-0000")//  aplicando a mascara, onde 0 representa os números a serem insridos e S as letras. {placeholde} para apresentar como quer q o texto seja apresentado

    $("form").validate ({ // para validar a mensagem de campo obrigatório, é precisa colocar os "name" além das tags de "id"
        rules: {
            nome: {
                required: true
            },

            email: {
                required: true,
                email: true
            },
            
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: true
            },
            mensagem: {
                required: false
            }

        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let campoInvalido = validador.numberOfInvalids();
            if (campoInvalido) {
                alert(`Existem ${campoInvalido} campos incorretos`)
            }
        }
    })

    $(".lista-veiculos button").click(function(){ // trás o usuário para o nosso formulário ao clicar em "Tenho interesse"
        const destino = $("#contato")
        const nomeVeiculo = $(this).parent().find("h3").text() // cria a variável do texto

        $("#veiculo-interesse").val(nomeVeiculo)//leva a variável para o formulário de preenchimento.

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})