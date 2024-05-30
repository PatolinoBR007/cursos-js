class Calculadora {
    static gerarCalc = (target)=>{
        const estilo_calc =
            "@font-face {\n\tfont-family: 'digital-display';\n\tsrc: url(fonts/digital_display_tfb/digital\ display\ tfb.ttf);\n\tfont-size: large;\n\tfont-weight: bold;\n}\n"+
            "*{\n\tpadding: 0;\n\tmargin: 0;\n\tborder: none;\n\tbox-sizing: border-box;\n\tfont-size: large;\n}\n"+
            "body{\n\tbackground: url(../assets/pexels-fwstudio-33348-172276.jpg) black no-repeat ficenter center;\n\tbackground-size: cover;\n\tposition: relative;\n}\n"+
            ".calc{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: row;\n\tposition: absolute;\n\ttop: 0px;\n\tleft: -250px;\n}\n"+
            ".calc_exibir{\n\tleft: 0px !important;\n}\n"+
            ".calc_principal{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tbackground-color: #1e2124;\n\tbox-shadow: 5px 5px 5px #0000007e;\n\twidth: 250px;\n\theight: 437px;\n\tpadding: 5px;\n\tborder: 15px solid #1e2124;\n\tborder-radius: 7px;\n}\n"+
            ".div_nome{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 10px;\n\twidth: 230px;\n\tcolor: white;\n}\n"+
            ".div_nome > p {\n\tbackground-color: #424549;\n\tpadding: 2px 5px;\n\tbox-shadow: 1px 1px 4px #00000080 inset;\n\ttext-shadow: 1px 1px 4px black;\n}\n"+
            ".div_teclas{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 230px;\n\tflex-wrap: wrap;\n}\n"+
            ".tecla{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: #99aab5;\n\tmargin: 2px;\n\tfont-weight: bold;\n\twidth: 50px;\n\theight: 50px;\n\tcursor: pointer;\n\tborder-radius: 10px;\n}\n"+
            ".teclaOp{\n\tbackground-color: #7289da !important;\n}\n"+
            "#tc{\n\twidth: 160px;\n}\n"+
            ".div_display{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 230px;\n\theight: 62px;\n\tmargin: 10px;\n\tbackground-color: #424549;\n\tcolor: #fff;\n\tbox-shadow: 2px 2px 3px #0000005d inset;\n}\n"+
            ".display{\n\twidth: 230px;\n\tpadding: 0px 10px;\n\tfont-family: 'digital-display', monospace;\n\tfont-size: 3em;\n\ttext-align: end;\n}\n"+
            ".disp{\n\tcolor: #868686;\n}\n"+
            ".calc_aba{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 20px;\n\theight: 50px;\n\tbackground-color: #1e2124;\n\tborder-radius: 0px 7px 7px 0px;\n\tcolor: #fff;\n}"
        
        const styleCalc = document.createElement('style')
        styleCalc.innerHTML = estilo_calc
        target.appendChild(styleCalc)
        
        const calc = document.createElement('div')
        calc.setAttribute('id','calc')
        calc.setAttribute("class","calc")
        document.body.prepend(calc)
        
        const calc_principal = document.createElement('div')
        calc_principal.setAttribute('id','calc_principal')
        calc_principal.setAttribute("class","calc_principal")
        calc.appendChild(calc_principal)
        
        const div_nome = document.createElement('div')
        div_nome.setAttribute('id','div_nome')
        div_nome.setAttribute("class","div_nome")
        calc_principal.appendChild(div_nome)
        
        const p1 = document.createElement('p')
        p1.innerHTML ='Modulo calculadora'
        div_nome.appendChild(p1)
        
        const div_display = document.createElement('div')
        div_display.setAttribute('id','div_display')
        div_display.setAttribute("class","div_display")
        calc_principal.appendChild(div_display)
        
        const p2 = document.createElement('p')
        p2.setAttribute('id','display')
        p2.setAttribute('class','display')
        p2.innerHTML = '0'
        div_display.appendChild(p2)

        const div_teclas = document.createElement('div')
        div_teclas.setAttribute('id','div_teclas')
        div_teclas.setAttribute("class","div_teclas")
        calc_principal.appendChild(div_teclas)
        
        const tecra = [
            '<button id="tcop" class="tecla">copy</button>',
            '<button id="tc" class="tecla">C</button>',
            '<button id="t7" class="tecla">7</button>',
            '<button id="t8" class="tecla">8</button>',
            '<button id="t9" class="tecla">9</button>',
            '<button id="tmais" class="tecla teclaOp">+</button>',
            '<button id="t4" class="tecla">4</button>',
            '<button id="t5" class="tecla">5</button>',
            '<button id="t6" class="tecla">6</button>',
            '<button id="tmenos" class="tecla teclaOp">-</button>',
            '<button id="t1" class="tecla">1</button>',
            '<button id="t2" class="tecla">2</button>',
            '<button id="t3" class="tecla">3</button>',
            '<button id="tmult" class="tecla teclaOp">X</button>',
            '<button id="tponto" class="tecla">.</button>',
            '<button id="t0" class="tecla">0</button>',
            '<button id="tigual" class="tecla teclaOp">=</button>',
            '<button id="tdiv" class="tecla teclaOp">÷</button>'
        ].map(el=>div_teclas.innerHTML+=el)

        const calc_aba = document.createElement('div')
        calc_aba.setAttribute('id','calc_aba')
        calc_aba.setAttribute("class","calc_aba")
        calc_aba.innerHTML = '❱'
        calc.appendChild(calc_aba)

        this.functionCalc()
    }
    static functionCalc =()=>{
        const teclas = [...document.querySelectorAll(".tecla")]
        const calc = document.querySelector('#calc')
        const calc_aba = document.querySelector('#calc_aba')
        let display = document.querySelector('#display')

        let n1 = 0 
        let n2 = 0 
        let n3 = 0 
        let op
        let t

        document.querySelector('body').onkeyup = (evt)=>{
            teclas.map((el)=>{
                if (evt.key === el.innerHTML) {
                    t = evt.key
                    console.log(`Tecla ${t} apertada`)
                }
            })
            if (!isNaN(t)) {
                if (display.innerHTML !== '0.' && t !== '.' && Number(display.innerHTML) === 0) {
                    display.innerHTML = ''
                }
                display.innerHTML += t
            }
            t = undefined
        }

        const clickDown = (btn)=>{
            btn.setAttribute('style', 'box-shadow: 2px 2px 3px #0000005d inset;')
            setTimeout(() => {
                btn.setAttribute('style', 'box-shadow: none;')
            }, 500);
            console.log(`Button ${btn.innerHTML} pressed`)
        }

        teclas.map((el)=>{
            el.addEventListener('click',(evt)=>{
                clickDown(el)
                if (!isNaN(el.innerHTML) || el.innerHTML == '.'){
                    if (display.innerHTML !== '0.' && el.innerHTML !== '.' && Number(display.innerHTML) === 0) {
                        display.innerHTML = ''
                    }
                    display.innerHTML += el.innerHTML   
                } else if (el.innerHTML === '='){
                    n2 = Number(display.innerHTML)
                    display.innerHTML = 0
                    n3 = eval(`${n1}${op}${n2}`)
                    display.innerHTML = n3
                    console.log(n1,op,n2,n3)
                } else if (el.innerHTML === '+'){
                    n1 = Number(display.innerHTML)
                    op = "+"
                    display.innerHTML = 0
                    console.log(n1, op)
                } else if (el.innerHTML === '-'){
                    n1 = Number(display.innerHTML)
                    op = "-"
                    display.innerHTML = 0
                    console.log(n1, op)
                } else if (el.innerHTML === 'X'){
                    n1 = Number(display.innerHTML)
                    op = "*"
                    display.innerHTML = 0
                    console.log(n1, op)
                } else if (el.innerHTML === '÷'){
                    n1 = Number(display.innerHTML)
                    op = "/"
                    display.innerHTML = 0
                    console.log(n1, op)
                } else if (el.innerHTML === 'C'){
                    display.innerHTML = 0
                    n1 = 0
                    n2 = 0
                    n3 = 0
                } else if (el.innerHTML === 'copy') {
                    navigator.clipboard.writeText(display.innerHTML)
                    alert("copiado para a area de transferencia")
                }
                if (display.innerHTML !== '0') {
                    display.classList.remove('disp')
                }
            })
        })

        calc_aba.addEventListener('click', (evt)=>{
            calc.setAttribute('style', 'transition: .2s;')
            calc.classList.toggle('calc_exibir')
            if (!calc.classList.contains('calc_exibir')) {
                calc_aba.innerHTML = '❱'
            } else {
                calc_aba.innerHTML = '❰'
            }
        })

        setInterval(() => {
            if (display.innerHTML === '0') {
                display.classList.toggle('disp')
            }
        }, 1500);
    }
}
export {Calculadora}
