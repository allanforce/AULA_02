
//É um evento "DOMContentLoaded" para aguardar o carregamento do DOM
addEventListener('DOMContentLoaded', function() {
    // Função para fazer o acompanhamento da imagem
    function acompanharImagem(classe, fatorVelocidade) {
        addEventListener('scroll', function() {
            let foto = document.querySelector(classe);
            let scrollY = window.scrollY;
            //Use if para verificar se os elementos foram encontrados antes de tentar acessar suas propriedades style. Por exemplo:
            if (innerWidth >= 1000) {
                if (foto) {
                    let translateValue = `${scrollY * fatorVelocidade}px`;
                    foto.style.transform = `translateY(${translateValue})`;
                }
            }
        });
    }

    // Chame a função para cada imagem que você deseja acompanhar
    acompanharImagem('.apresentacao__imagem__2', 0.95);
    acompanharImagem('.apresentacao__imagem__3', 0.88);
});

/*
addEventListener('DOMContentLoaded', function() {
    addEventListener('scroll', function() {
        let fotoSobremim = document.querySelector('.apresentacao__imagem__2');
        let scrollY1 = window.scrollY;

        // Ajuste o valor de translate conforme necessário para controlar a velocidade do acompanhamento.
        if (innerWidth >= 1000) {
            if (fotoSobremim) {
                let translateValue = `${scrollY1 * 0.95}px`;

                fotoSobremim.style.transform = `translateY(${translateValue})`;
            }
        }
    });

    addEventListener('scroll', function() {
        let fotoCurriculo = document.querySelector('.apresentacao__imagem__3');
        let scrollY2 = window.scrollY;

        // Ajuste o valor de translate conforme necessário para controlar a velocidade do acompanhamento.
        if (innerWidth >= 1000) {
            if (fotoCurriculo) {
                let translateValue = `${scrollY2 * 0.88}px`;

                fotoCurriculo.style.transform = `translateY(${translateValue})`;
            }
        }
    });
});
*/