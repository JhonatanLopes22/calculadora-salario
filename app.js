function calcular(){
    let salario_hora = document.getElementById("salario_hora").value
    let quantidade_horas = document.getElementById("quantidade_horas").value
    let total = parseFloat(salario_hora) * parseFloat(quantidade_horas)
    document.getElementById("resultado").innerText = total
}
