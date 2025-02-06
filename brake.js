
// for(i=0; i<=20; i++){
//     if (i == 10) {
//         break;            //" kapërcen ciklin dhe vazhdon ekzekutimin pas ciklit, 
//     }
//     document.write(i + "<br/>");
// }

 for(i=0; i<=20; i++){
        if (i == 10) {
            continue;                 // kapercen vetëm një cikël loop, dhe vazhdon me iteracionin tjetër, kapercen rastin kur plotesohet if dhe fillon prap kushtin
        }
        document.write(i + "<br/>");
    }