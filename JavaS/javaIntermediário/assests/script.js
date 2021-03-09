function data() {
    var date = document.getElementById("data").innerHTML;
    var dt = new Date();

    var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    date = date + "<div>" + dias[dt.getDay()]+" "+dt.getDate()+" de "+ mes[dt.getMonth()]+" de "+ dt.getFullYear() +"<br/>"+"<br/>"+ "Hora da ativação: "+dt.getHours()+":"+dt.getMinutes() + "</div>";
    document.getElementById("data").innerHTML = date;
}