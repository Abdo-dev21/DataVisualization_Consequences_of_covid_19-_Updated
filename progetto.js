

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const ZOOM_THRESHOLD = [0.3, 7];
const OVERLAY_MULTIPLIER = 10;
const OVERLAY_OFFSET = OVERLAY_MULTIPLIER / 2 - 0.5;
const ZOOM_DURATION = 500;
const ZOOM_IN_STEP = 2;
const ZOOM_OUT_STEP = 1 / ZOOM_IN_STEP;
const HOVER_COLOR = "#d36f80"
const colorScale = d3.scaleLinear()
    .domain([0, 3000])
     //I goofed, so this has to be in reverse order
    .range(["#00806D", "#00BC4C", "#00F200", "#85FB44"].reverse());
const width =600;
var width0=width-200;
var width1=width-200;
var width2=width-200;
var txt=52;
const height=300;
// --------------- Event handler ---------------
const zoom = d3
  .zoom()
  .scaleExtent(ZOOM_THRESHOLD)
  .on("zoom", zoomHandler);
var cont=0;
var cont2=0;
const country= new Array(3);
country[0]="#"
country[1]="#"
country[2]="#"

function zoomHandler() {
  g.attr("transform", d3.event.transform);
}

function mouseOverHandler(d, i) {
  var dens
  for(var j=0;j<density.length;j++){

    if(density[j].country.toString()==d.properties.NAME.toString()){

      dens= density[j].value;
    }
  }
  d3.select(this).attr("fill", HOVER_COLOR);
  d3.select(this)
  .append("title")
  .text("Country: "+d.properties.NAME+"\nDensity: "+Math.round(parseInt(dens)));

}

function mouseOutHandler(d, i) {
  d3.select(this).attr("fill", "yellow")

}
var svg3 = d3
        .select("#barschar1")
        .append("svg")
        .attr("id","svgbars0")
        .attr("width", "100%")
        .attr("height", "100%")
        var svg4 = d3
        .select("#barschar2")
        .append("svg")
        .attr("id","svgbars1")
        .attr("width", "100%")
        .attr("height", "100%")
        var svg5 = d3
        .select("#barschar3")
        .append("svg")
        .attr("id","svgbars2")
        .attr("width", "100%")
        .attr("height", "100%")
function clickHandler(d, i) {
  const questo=d3.select(this);
const flag= new Array(3);
flag[0]=false;
flag[1]=false;
flag[2]=false;
const flag1= new Array(3);
flag1[0]=false;
flag1[1]=false;
flag1[2]=false;
const flag2= new Array(3);
flag2[0]=false;
flag2[1]=false;
flag2[2]=false;
const check= new Array(3);
check[0]=false;
check[1]=false;
check[2]=false;

if(cont>0){
  d3.select("#svgscatter").remove();
  d3.select("#errorscatter").remove();
  d3.select("#svglinear").remove();
  d3.select("#errorlinear").remove();
  //d3.select("#svgbars").remove();
  d3.select("#errorbars").remove();
}



 if(d3.select(this).attr("opacity")=="0.4"){
  d3.select(this).attr("opacity","1")
  for (var j=0;j<country.length;j++){
    if (country[j]==d.properties.NAME){
      d3.select("#svgbars0").remove();
      d3.select("#svgbars1").remove();
      d3.select("#svgbars2").remove();

       svg3 = d3
        .select("#barschar1")
        .append("svg")
        .attr("id","svgbars0")
        .attr("width", "100%")
        .attr("height", "100%")
       svg4 = d3
        .select("#barschar2")
        .append("svg")
        .attr("id","svgbars1")
        .attr("width", "100%")
        .attr("height", "100%")
       svg5 = d3
        .select("#barschar3")
        .append("svg")
        .attr("id","svgbars2")
        .attr("width", "100%")
        .attr("height", "100%")
      check[0]=false;
      check[1]=false;
      check[2]=false;
       country[j]="#";
       cont2--;
       if(cont2==0){
        d3.select("#choosen_country0").text("");
        d3.select("#noia").text("")
        d3.select("#noia2").text("")
      }
      else{
        d3.select("#choosen_country0").text("Choosen Countries: ");
      }

      if(j==0){
        if (cont2==2){
          country[0]=country[1]
          country[1]=country[2]
          country[2]="#"

          d3.select("#choosen_country1").text(country[0])
          d3.select("#choosen_country2").text(country[1])
          d3.select("#choosen_country3").text("")
        }
        else{
          if (cont2==1){
            for (var j =0; j<country.length;j++){
              if (country[j]!="#"){
                country[0]=country[j];
                country[j]="#"
                d3.select("#choosen_country1").text(country[0])
                d3.select("#choosen_country2").text("")
                d3.select("#choosen_country3").text("")
              }
            }
          }
          else{
            d3.select("#choosen_country1").text("")
          }

        }

        //d3.select("#choosen_country1").text("")
        if(cont2==0){
          d3.select("#choosen_country0").text("");
        }
      }
      else{
        if(j==1){
          if (cont2==2){
            country[1]=country[2]
            country[2]="#"

            d3.select("#choosen_country1").text(country[0])
            d3.select("#choosen_country2").text(country[1])
            d3.select("#choosen_country3").text("")
          }
          else{
            /*
            if (cont2==1){
              for (var j =0; j<country.length;j++){
                if (country[j]!="#"){
                  console.log(country[0]+" "+country[j])
                  country[0]=country[j];
                  country[j]="#"
                  console.log(country[0])
                  d3.select("#choosen_country1").text(country[0])
                  d3.select("#choosen_country2").text("")
                  d3.select("#choosen_country3").text("")
                }
              }
            }*/
           // else{
              d3.select("#choosen_country2").text("")
            //}

          }
         // d3.select("#svgbars1").remove();
         // d3.select("#choosen_country2").text("")
        }
        else{
          if (cont2==2){

            country[2]="#"

            d3.select("#choosen_country1").text(country[0])
            d3.select("#choosen_country2").text(country[1])
            d3.select("#choosen_country3").text("")
          }
          else{
            /*
            if (cont2==1){
              for (var j =0; j<country.length;j++){
                if (country[j]!="#"){
                  console.log(country[0]+" "+country[j])
                  country[0]=country[j];
                  country[j]="#"
                  console.log(country[0])
                  d3.select("#choosen_country1").text(country[0])
                  d3.select("#choosen_country2").text("")
                  d3.select("#choosen_country3").text("")
                }
              }
            }*/
            //else{
              d3.select("#choosen_country3").text("")
            //}

          }
          //d3.select("#svgbars2").remove();
          d3.select("#choosen_country3").text("")
        }
      }

    }
  }

 }
 else{
  d3.select("#svgbars0").remove();
  d3.select("#svgbars1").remove();
  d3.select("#svgbars2").remove();

   svg3 = d3
    .select("#barschar1")
    .append("svg")
    .attr("id","svgbars0")
    .attr("width", "100%")
    .attr("height", "100%")
   svg4 = d3
    .select("#barschar2")
    .append("svg")
    .attr("id","svgbars1")
    .attr("width", "100%")
    .attr("height", "100%")
   svg5 = d3
    .select("#barschar3")
    .append("svg")
    .attr("id","svgbars2")
    .attr("width", "100%")
    .attr("height", "100%")
  check[0]=false;
  check[1]=false;
  check[2]=false;
   d3.select("#noia").text("GDP of selcted country").attr("marginTop","20%");
   d3.select("#noia2").text("In the graph below it can be seen how covid-19 has brought down the GDP of most of the countries of the European community."+"\n"+" In fact, in 2020 the GDP had large percentage decreases. ")
   if (cont2==3){
     alert("you can't add further countries")
   }
   else{
     cont2++;

     if (country[0]=="#"){

      country[0]=d.properties.NAME;
        d3.select("#choosen_country1").text(d.properties.NAME)
     }
     else{
       if(country[1]=="#"){

        country[1]=d.properties.NAME;
        d3.select("#choosen_country2").text(d.properties.NAME)
       }
       else{

         country[2]=d.properties.NAME;
        d3.select("#choosen_country3").text(d.properties.NAME)
       }
     }
     if(country[0]=="#"&&country[1]=="#"&&country[2]=="#"){
      d3.select("#choosen_country0").text("");
    }
    else{
      d3.select("#choosen_country0").text("Choosen Countries: ");
    }
    d3.select(this).attr("opacity","0.4");

   }

 }



d3.csv("/dataset/trips.csv",
    function(h){

      return  {data:d3.timeParse("%Y-%m")(h.data), country0 :h[country[0]], country1 :h[country[1]], country2 :h[country[2]] }
    },



    function(data){

      flag[0]=false;
      flag[1]=false;
      flag[2]=false;
      var i;
      for( i=0;i <90;i++){

        if(country[0]!="#"){
          if(data.filter(function(h){ return h.country0[i]==":"}).length!=0){
            flag[0]=true;
            //d3.select(this).attr("opacity","1");
            country[0]="#";
            d3.select("#choosen_country1").text("")
            cont2--;
            questo.attr("opacity","1")
            if(cont2==0){
              d3.select("#choosen_country0").text("");
              d3.select("#noia").text("")
              d3.select("#noia2").text("")
            }
            alert("The selected country doesn't have enough data, choose another one");


          }
        }
        if(country[1]!="#"){
          if(data.filter(function(h){ return h.country1[i]==":"}).length!=0){
            flag[1]=true;
            //d3.select(this).attr("opacity","1");
            country[1]="#";
            d3.select("#choosen_country2").text("")
            cont2--;
            questo.attr("opacity","1")
            if(cont2==0){
              d3.select("#choosen_country0").text("");
              d3.select("#noia").text("")
              d3.select("#noia2").text("")
            }
            alert("The selected country doesn't have enough data, choose another one");
          }
        }
        if(country[2]!="#"){
          if(data.filter(function(h){ return h.country2[i]==":"}).length!=0){
            flag[2]=true;
            //d3.select(this).attr("opacity","1");
            country[2]="#";
            d3.select("#choosen_country3").text("")
            cont2--;
            questo.attr("opacity","1")
            if(cont2==0){
              d3.select("#choosen_country0").text("");
              d3.select("#noia").text("")
              d3.select("#noia2").text("")
            }
            alert("The selected country doesn't have enough data, choose another one");
          }
        }
      }


      if(flag[0]&&flag[1]&&flag[2]){

        d3.select("#scatterchar")
        .append("p")
        .attr("id","errorscatter")
        .text("not enough data!");
        d3.select("#errorscatter")
        .style("color", "red")
        .style("font-size","large")
        .style("margin-top","100px");
        cont++;
        flag=false;
      }
      else{
        if(!(country[0]=="#"&&country[1]=="#"&&country[2]=="#")){
       cont++;

        var svg1 = d3
        .select("#scatterchar")
        .append("svg")
        .attr("id","svgscatter")
        .attr("width", "100%")
        .attr("height", "100%")

        svg1.attr("transform", "translate(230," + (30) + ")");
        //Add X Axis

          var x = d3.scaleTime()
        .domain(d3.extent(data, function(h) {

           return h.data }))
        .range([ 0, width-100]);
        svg1.append("g")
          .attr("transform", "translate(70," + height + ")")
          .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
          .domain([0, d3.max(data, function(h) {
             if (country[0]!="#"&&country[1]!="#"&&country[2]!="#"){
            return Math.max(h.country0, h.country1,h.country2);
            }
            else{

                  if(country[0]!="#"&&country[1]!="#"&&country[2]=="#")
                      return Math.max(h.country0, h.country1);
                    else {
                      if(country[0]!="#"&&country[1]=="#"&&country[2]!="#")
                          return Math.max(h.country0, h.country2);
                      else{
                        if(country[0]=="#"&&country[1]!="#"&&country[2]!="#")
                        return Math.max(h.country1, h.country2);
                        else{
                          if(country[0]!="#"&&country[1]=="#"&&country[2]=="#")
                          return parseInt(h.country0);
                          else{
                            if(country[0]=="#"&&country[1]!="#"&&country[2]=="#")
                            return parseInt(h.country1);
                            else{
                              if(country[0]=="#"&&country[1]=="#"&&country[2]!="#")
                              return parseInt(h.country2);
                            }
                          }
                        }
                      }
               }

            }

          })+100000])
          .range([ height,0 ])
          svg1.append("g")
          .attr("transform", "translate(" +70+ ",0)")
          .call(d3.axisLeft(y));
          /// linea 1
          if(country[0]!="#"){
       svg1.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "#a734d1")
          .attr("id", "path1")
          .attr("transform", "translate(" +70+ ",0)")

          .on("mouseover", function(h) {

             d3.select(this)
            .attr("stroke", "#e6e273")
            .append("title")
            .text(function(h) {
              var x1 =  x.invert(d3.mouse(d3.event.currentTarget)[0]);
              var temp1 = "Country: "+country[0]+"\nDate(Month-Year): "+(new Date(h[Math.round(x(x1)/5.65)].data).getUTCMonth()+1)
              +"-"+new Date(h[Math.round(x(x1)/5.65)].data).getFullYear()+"\nValue: "+h[Math.round(x(x1)/5.65)].country0
              x1=0;
              return temp1;
                })
            .attr("stroke", "#e6e273")

                   })

            .on("mouseout", function(h) {
              d3.select(this)
            .attr("stroke", "#a734d1")
            .select("title").remove();
               })
            .attr("stroke-width", 3)
            .attr("d", d3.line()
            .x(function(h) { return x(h.data) })
            .y(function(h) {
              return y(h.country0) })
              );
          }
          if(country[1]!="#"){
              /// linea 2
          svg1.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "#e3a842")
          .attr("id", "path2")
          .attr("transform", "translate(" +70+ ",0)")

          .on("mouseover", function(h) {

             d3.select(this)
            .attr("stroke", "#e6e273")
            .append("title")
            .text(function(h) {
              var x1 =  x.invert(d3.mouse(d3.event.currentTarget)[0]);
              var temp1 = "Country: "+country[1]+"\nDate(Month-Year): "+(new Date(h[Math.round(x(x1)/5.65)].data).getUTCMonth()+1)
              +"-"+new Date(h[Math.round(x(x1)/5.65)].data).getFullYear()+"\nValue: "+h[Math.round(x(x1)/5.65)].country1
              x1=0;
              return temp1;
                })
            .attr("stroke", "#e6e273")

                   })

            .on("mouseout", function(h) {
              d3.select(this)
            .attr("stroke", "#e3a842")
            .select("title").remove();
               })
            .attr("stroke-width", 3)
            .attr("d", d3.line()
            .x(function(h) { return x(h.data) })
            .y(function(h) { return y(h.country1) })
              );
          }
              /// linea 3
          if (country[2]){
           svg1.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "#09c206")
          .attr("id", "path3")
          .attr("transform", "translate(" +70+ ",0)")

          .on("mouseover", function(h) {

             d3.select(this)
            .attr("stroke", "#e6e273")
            .append("title")
            .text(function(h) {
              var x1 =  x.invert(d3.mouse(d3.event.currentTarget)[0]);
              var temp1 = "Country: "+country[2]+"\nDate(Month-Year): "+(new Date(h[Math.round(x(x1)/5.65)].data).getUTCMonth()+1)
              +"-"+new Date(h[Math.round(x(x1)/5.65)].data).getFullYear()+"\nValue: "+h[Math.round(x(x1)/5.65)].country2
              x1=0;
              return temp1;
                })
            .attr("stroke", "#e6e273")

                   })

            .on("mouseout", function(h) {
              d3.select(this)
            .attr("stroke", "#09c206")
            .select("title").remove();
               })
            .attr("stroke-width", 3)
            .attr("d", d3.line()
            .x(function(h) { return x(h.data) })
            .y(function(h) { return y(h.country2) })
              );
          }
        }
      }


        d3.csv("/dataset/ecommercesales.csv",
    function(h){

      return  {data:d3.timeParse("%Y")(h.data), country0 :h[country[0]], country1 :h[country[1]], country2 :h[country[2]]}
    },
    function(data){
      flag1[0]=false;
      flag1[1]=false;
      flag1[2]=false;
      var i;
      for( i=0;i <12;i++){

        if(country[0]!="#"){
          if(data.filter(function(h){ return h.country0[i]==":"}).length!=0){
            flag1[0]=true;
            //d3.select(this).attr("opacity","1");
            d3.select("#path1").remove()
            country[0]="#";
            d3.select("#choosen_country1").text("")
            cont2--;
            questo.attr("opacity","1")
            if(cont2==0){
              d3.select("#choosen_country0").text("");
              d3.select("#noia").text("")
              d3.select("#noia2").text("")
            }
            alert("The selected country doesn't have enough data, choose another one");


          }
        }
        if(country[1]!="#"){
          if(data.filter(function(h){ return h.country1[i]==":"}).length!=0){
            flag1[1]=true;
            //d3.select(this).attr("opacity","1");
            d3.select("#path2").remove()
            country[1]="#";
            d3.select("#choosen_country2").text("")
            cont2--;
            questo.attr("opacity","1")
            if(cont2==0){
              d3.select("#choosen_country0").text("");
              d3.select("#noia").text("")
              d3.select("#noia2").text("")
            }
            alert("The selected country doesn't have enough data, choose another one");
          }
        }
        if(country[2]!="#"){
          if(data.filter(function(h){ return h.country2[i]==":"}).length!=0){
            flag1[2]=true;
            d3.select("#path3").remove()
            //d3.select(this).attr("opacity","1");
            country[2]="#";
            d3.select("#choosen_country3").text("")
            cont2--;
            questo.attr("opacity","1")
            if(cont2==0){
              d3.select("#choosen_country0").text("");
              d3.select("#noia").text("")
              d3.select("#noia2").text("")
            }
            alert("The selected country doesn't have enough data, choose another one");
          }
        }
      }

      if(flag1[0]&&flag1[1]&&flag1[2]){

        d3.select("#linearchar")
        .append("p")
        .attr("id","errorlinear")
        .text("not enough data!");
        d3.select("#errorlinear")
        .style("color", "red")
        .style("font-size","large")
        .style("margin-top","100px");
        cont++;
        flag1[0]=false;
        flag1[1]=false;
        flag1[2]=false;
      }
      else{
       cont++;




        var svg2 = d3
        .select("#linearchar")
        .append("svg")
        .attr("id","svglinear")
        .attr("width", "100%")
        .attr("height", "100%")

        svg2.attr("transform", "translate(230," + (30) + ")");
        //Add X Axis
          var x = d3.scaleTime()
        .domain(d3.extent(data, function(h) {

           return h.data }))
        .range([ 0, width-100]);
        svg2.append("g")
          .attr("transform", "translate(70," + height + ")")
          .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
          .domain([0, d3.max(data, function(h) {
            if (country[0]!="#"&&country[1]!="#"&&country[2]!="#"){
           return Math.max(h.country0, h.country1,h.country2);
           }
           else{

                 if(country[0]!="#"&&country[1]!="#"&&country[2]=="#")
                     return Math.max(h.country0, h.country1);
                   else {
                     if(country[0]!="#"&&country[1]=="#"&&country[2]!="#")
                         return Math.max(h.country0, h.country2);
                     else{
                       if(country[0]=="#"&&country[1]!="#"&&country[2]!="#")
                       return Math.max(h.country1, h.country2);
                       else{
                         if(country[0]!="#"&&country[1]=="#"&&country[2]=="#")
                         return parseInt(h.country0);
                         else{
                           if(country[0]=="#"&&country[1]!="#"&&country[2]=="#")
                           return parseInt(h.country1);
                           else{
                             if(country[0]=="#"&&country[1]=="#"&&country[2]!="#")
                             return parseInt(h.country2);
                           }
                         }
                       }
                     }
              }

           }

         })+10])
          .range([ height,0 ])
          svg2.append("g")
          .attr("transform", "translate(" +60+ ",0)")
          .call(d3.axisLeft(y));
         console.log(country[2])
          if(country[0]!="#"&&country[1]!="#"){
            svg2.selectAll("myline")
            .data(data)
            .enter()

            .append("line")
              .attr("x1", function(h) { return x(h.data); })
              .attr("x2", function(h) { return x(h.data); })
              .attr("x3", function(h) { return x(h.data); })
              .attr("y1", function(h) { return y(d3.min([h.country0,h.country1])); })
              .attr("y2", function(h) { return y(d3.max([h.country0,h.country1])); })

              .attr("stroke", "grey")
              .attr("stroke-width", "1px")
              .attr("transform", "translate(" +70+ ",0)")
          }
          if(country[0]!="#"&&country[2]!="#"){
            svg2.selectAll("myline")
            .data(data)
            .enter()

            .append("line")
              .attr("x1", function(h) { return x(h.data); })
              .attr("x2", function(h) { return x(h.data); })

              .attr("y1", function(h) { return y(d3.min([h.country0,h.country2])); })
              .attr("y2", function(h) { return y(d3.max([h.country0,h.country2])); })

              .attr("stroke", "grey")
              .attr("stroke-width", "1px")
              .attr("transform", "translate(" +70+ ",0)")
          }
          if(country[1]!="#"&&country[2]!="#"){
            svg2.selectAll("myline")
          .data(data)
          .enter()

          .append("line")
            .attr("x1", function(h) { return x(h.data); })
            .attr("x2", function(h) { return x(h.data); })
            .attr("y1", function(h) { return y(d3.min([h.country1,h.country2])); })
            .attr("y2", function(h) { return y(d3.max([h.country1,h.country2])); })

            .attr("stroke", "grey")
            .attr("stroke-width", "1px")
            .attr("transform", "translate(" +70+ ",0)")
          }
          if(country[1]!="#"&&country[2]!="#"&&country[0]!="#"){
            svg2.selectAll("myline")
            .data(data)
            .enter()

            .append("line")
              .attr("x1", function(h) { return x(h.data); })
              .attr("x2", function(h) { return x(h.data); })
              .attr("y1", function(h) { return y(d3.min([h.country0,h.country1,h.country2])); })
              .attr("y2", function(h) { return y(d3.max([h.country0,h.country1,h.country2])); })

              .attr("stroke", "grey")
              .attr("stroke-width", "1px")
              .attr("transform", "translate(" +70+ ",0)")
          }
          // Lines
          /*
          svg2.selectAll("myline")
          .data(data)
          .enter()

          .append("line")
            .attr("x1", function(h) { return x(h.data); })
            .attr("x2", function(h) { return x(h.data); })
            .attr("x3", function(h) { return x(h.data); })
            .attr("y1", function(h) { return y(d3.min([h.country0,h.country1,h.country2])); })
            .attr("y2", function(h) { return y(d3.max([h.country0,h.country1,h.country2])); })

            .attr("stroke", "grey")
            .attr("stroke-width", "1px")
            .attr("transform", "translate(" +70+ ",0)")*/

           /// punto1
           if(country[0]!="#"){
            svg2.selectAll(".punto1")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function(h) {return x(h.data);})
            .attr("cy", function(h) {return y(h.country0);})
            .attr("r", "5")
            .style("fill","#a734d1")
            .attr("transform", "translate(" +70+ ",0)")
            .on("mouseover", function(h) {
               var x1 =  x.invert(d3.mouse(d3.event.currentTarget)[0]);
               d3.select(this)
              .style("fill", "#e6e273")
              .append("title")
              .text(function(h) {var temp = "Country: "+country[0]+"\nYear: "+new Date(h.data).getFullYear()+"\nValue: "+h.country0+"%"
              return temp;})})
              .on("mouseout", function(h) {
                d3.select(this)
              .style("fill", "#a734d1")
              .select("title").remove();
                 })
           }

                /// punto2
          if(country[1]!="#"){
            svg2.selectAll(".punto2")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function(h) {return x(h.data);})
            .attr("cy", function(h) {return y(h.country1);})
            .attr("r", "5")
            .style("fill","#e3a842")
            .attr("transform", "translate(" +70+ ",0)")
            .on("mouseover", function(h) {
               var x1 =  x.invert(d3.mouse(d3.event.currentTarget)[0]);
               d3.select(this)
              .style("fill", "#e6e273")
              .append("title")
              .text(function(h) {var temp = "Country: "+country[1]+"\nYear: "+new Date(h.data).getFullYear()+"\nValue: "+h.country1+"%"
              return temp;})})
              .on("mouseout", function(h) {
                d3.select(this)
                .style("fill", "#e3a842")
              .select("title").remove();
                 })
          }


                /// punto3
          if(country[2]!="#"){
            svg2.selectAll(".punto3")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function(h) {return x(h.data);})
            .attr("cy", function(h) {return y(h.country2);})
            .attr("r", "5")
            .style("fill","#09c206")
            .attr("transform", "translate(" +70+ ",0)")
            .on("mouseover", function(h) {
               var x1 =  x.invert(d3.mouse(d3.event.currentTarget)[0]);
               d3.select(this)
              .style("fill", "#e6e273")
              .append("title")
              .text(function(h) {var temp = "Country: "+country[2]+"\nYear: "+new Date(h.data).getFullYear()+"\nValue: "+h.country2+"%"
              return temp;})})
              .on("mouseout", function(h) {
                d3.select(this)
                .style("fill", "#09c206")
              .select("title").remove();
                 })
          }

              }
     //barCHAR
     d3.csv("/dataset/gdp.csv",
        function(h){

          return  {data:h.data, country0 :h[country[0]], country1 :h[country[1]], country2 :h[country[2]]}
        },
        function(data){
          if(!(country[0]=="#"&&country[1]=="#"&&country[2]=="#")){

            document.getElementById("scatter").style.display="block";
            document.getElementById("linear").style.display="block";
            document.getElementById("bars1").style.display="block";
            if ((country[0]=="#"&&country[1]=="#")||(country[1]=="#"&&country[2]=="#")||(country[0]=="#"&&country[2]=="#")){
              document.getElementById("bars").style.display="block";
              document.getElementById("bars").style.marginLeft="35%";
              document.getElementById("bars").style.marginRight="35%";
              width0=width-100;
              width1=width-100;
              width2=width-100;
              txt=49;
            }
             else{
              document.getElementById("bars").style.display="flex";
              if(country[0]=="#"||country[1]=="#"||country[2]=="#"){
                document.getElementById("bars").style.marginLeft="20%";
                document.getElementById("bars").style.marginRight="20%";
                width0=width-250;
                width1=width-250;
                width2=width-250;
                txt=57;

              }
              else{
                document.getElementById("bars").style.marginLeft="5%";
                document.getElementById("bars").style.marginRight="5%";
                width0=width-250;
                width1=width-250;
                width2=width-250;
                txt=57;
              }
            }
         }
         else{
          document.getElementById("scatter").style.display="none";
          document.getElementById("linear").style.display="none";
          document.getElementById("bars1").style.display="none";
         }
          flag2[0]=false;
          flag2[1]=false;
          flag2[2]=false;
          var i;
          for( i=0;i <11;i++){

            if(country[0]!="#"){
              if(data.filter(function(h){ return h.country0[i]==":"}).length!=0){
                flag2[0]=true;
                //d3.select(this).attr("opacity","1");
                d3.select("#path1").remove()
                country[0]="#";
                d3.select("#choosen_country1").text("")
                cont2--;
                questo.attr("opacity","1")
                if(cont2==0){
                  d3.select("#choosen_country0").text("");
                  d3.select("#noia2").text("")
                }
                alert("The selected country doesn't have enough data, choose another one");


              }
            }
            if(country[1]!="#"){
              if(data.filter(function(h){ return h.country1[i]==":"}).length!=0){
                flag2[1]=true;
                //d3.select(this).attr("opacity","1");
                d3.select("#path2").remove()
                country[1]="#";
                d3.select("#choosen_country2").text("")
                cont2--;
                questo.attr("opacity","1")
                if(cont2==0){
                  d3.select("#choosen_country0").text("");
                  d3.select("#noia").text("")
                  d3.select("#noia2").text("")
                }
                alert("The selected country doesn't have enough data, choose another one");
              }
            }
            if(country[2]!="#"){
              if(data.filter(function(h){ return h.country2[i]==":"}).length!=0){
                flag2[2]=true;
                d3.select("#path3").remove()
                //d3.select(this).attr("opacity","1");
                country[2]="#";
                d3.select("#choosen_country3").text("")
                cont2--;
                questo.attr("opacity","1")
                if(cont2==0){
                  d3.select("#choosen_country0").text("");
                  d3.select("#noia").text("")
                  d3.select("#noia2").text("")
                }
                alert("The selected country doesn't have enough data, choose another one");
              }
            }
          }


      if(flag2[0]&&flag2[1]&&flag2[2]){

            d3.select("#linearchar")
            .append("p")
            .attr("id","errorlinear")
            .text("not enough data!");
            d3.select("#errorlinear")
            .style("color", "red")
            .style("font-size","large")
            .style("margin-top","100px");
            cont++;
            flag2[0]=false;
            flag2[1]=false;
            flag2[2]=false;
          }
      else{
       cont++;


       if(country[0]!="#"&&!check[0]){
        check[0]=true;
        /*
        if (country[1]=="#"&&country[2]=="#") {

          svg3.attr("transform", "translate(470," + (30) + ")");

        }*/

        //Add X Axis
          var x = d3.scaleBand()
          .domain(data.map(function(h) { return h.data; }))


        .range([ 0, width0]);
        svg3.append("g")
          .attr("transform", "translate(70," + height + ")")
           .call(d3.axisBottom(x));
         //Add K Axis
         var k = d3.scaleOrdinal()
         .range([ 0, width0]);
        svg3.append("g")
          .attr("transform", "translate(70," + height/2 + ")")
           .call(d3.axisBottom(k));
       svg3.append("g")
         .attr("transform", "translate(70," + height + ")")
          .call(d3.axisBottom(x));

          if(country[1]!="#"&&country[2]!="#"){
            var hmax=d3.max(data, function(h) { return Math.max( +Math.abs(h.country2),+Math.abs(h.country1),+Math.abs(h.country0)); });
          }
          else{
            if (country[1]!="#"&&country[2]=="#"){
              var hmax=d3.max(data, function(h) { return Math.max( +Math.abs(h.country1),+Math.abs(h.country0)); });
            }
            else{
              if(country[2]!="#")
              var hmax=d3.max(data, function(h) { return Math.max( +Math.abs(h.country2),+Math.abs(h.country0)); });
              else
              var hmax=d3.max(data, function(h) { return  +Math.abs(h.country0); });
            }
          }
         // var hmax=d3.max([8])
        // Add Y axis
        var y = d3.scaleLinear()
          .domain([-hmax-1.5,hmax+1.5 ])
          .range([ height,0 ])
          svg3.append("g")
          .attr("transform", "translate(" +70+ ",0)")
          .call(d3.axisLeft(y));

          //BARS
          svg3.selectAll(".rect1")
			   .data(data)
			   .enter()
			   .append("rect")
         .attr("class","rect1")
         .attr("transform", "translate(" +80+ ",0)")
			   .attr("x", function(h) {

          return x(h.data);
          })
          .attr("y", function(h) {
              if(h.country0<0){
                  return height/2;
              }
              else{
                return  y(h.country0);
              }

          })

			   .attr("width", x.bandwidth()/2)

			   .attr("height", function(h) {
          return height/2 -y(Math.abs(h.country0));

			   })


			   .on("mouseover", function(h) {

					//Get this bar's x/y values, then augment for the tooltip
					var xPosition = parseFloat(d3.select(this).attr("x")) + x.bandwidth()+txt;
					var yPosition = parseFloat(d3.select(this).attr("y"))-5 ;

					//Create the tooltip label
					svg3.append("text")
					   .attr("id", "tooltip")
					   .attr("x", xPosition)
					   .attr("y", yPosition)
					   .attr("text-anchor", "middle")
					   .attr("font-family", "sans-serif")
					   .attr("font-size", "11px")
					   .attr("font-weight", "bold")
					   .attr("fill", "black")
					   .text(h.country0+"%");
            // .text("Country: "+country[0]+"\nValue: "+h.country0+"%");

			   })
			   .on("mouseout", function() {

					//Remove the tooltip
					d3.select("#tooltip").remove();

			   })
         svg3.selectAll("rect").data(data).attr("fill",function(h){
              if(h.country0>=0){
                return "#a734d1";
              }
              else{
                return "#db3f0b";
              }
          })

       }
       if(country[1]!="#"&&!check[1]){
        check[1]=true;


        //Add X Axis
          var x = d3.scaleBand()
          .domain(data.map(function(h) { return h.data; }))


        .range([ 0, width1]);
        svg4.append("g")
          .attr("transform", "translate(70," + height + ")")
           .call(d3.axisBottom(x));
         //Add K Axis
         var k = d3.scaleOrdinal()
         .range([ 0, width1]);
        svg4.append("g")
          .attr("transform", "translate(70," + height/2 + ")")
           .call(d3.axisBottom(k));
       svg4.append("g")
         .attr("transform", "translate(70," + height + ")")
          .call(d3.axisBottom(x));

          if(country[0]!="#"&&country[2]!="#"){
            var hmax=d3.max(data, function(h) { return Math.max( +Math.abs(h.country2),+Math.abs(h.country1),+Math.abs(h.country0)); });
          }
          else{
            if (country[0]!="#"&&country[2]=="#"){
              var hmax=d3.max(data, function(h) { return Math.max( +Math.abs(h.country1),+Math.abs(h.country0)); });
            }
            else{
              if(country[2]!="#")
              var hmax=d3.max(data, function(h) { return Math.max( +Math.abs(h.country2),+Math.abs(h.country1)); });
              else
              var hmax=d3.max(data, function(h) { return  +Math.abs(h.country1); });
            }
          }
         // var hmax=d3.max([8])
        // Add Y axis
        var y = d3.scaleLinear()
          .domain([-hmax-1.5,hmax+1.5 ])
          .range([ height,0 ])
          svg4.append("g")
          .attr("transform", "translate(" +70+ ",0)")
          .call(d3.axisLeft(y));

          //BARS
          svg4.selectAll(".rect2")
			   .data(data)
			   .enter()
			   .append("rect")
         .attr("class","rect2")
         .attr("transform", "translate(" +80+ ",0)")
			   .attr("x", function(h) {

          return x(h.data);
          })
          .attr("y", function(h) {
              if(h.country1<0){
                  return height/2;
              }
              else{
                return  y(h.country1);
              }

          })

			   .attr("width", x.bandwidth()/2)

			   .attr("height", function(h) {
          return height/2 -y(Math.abs(h.country1));

			   })


			   .on("mouseover", function(h) {

					//Get this bar's x/y values, then augment for the tooltip
					var xPosition = parseFloat(d3.select(this).attr("x")) + x.bandwidth()+txt;
					var yPosition = parseFloat(d3.select(this).attr("y"))-5 ;

					//Create the tooltip label
					svg4.append("text")
					   .attr("id", "tooltip")
					   .attr("x", xPosition)
					   .attr("y", yPosition)
					   .attr("text-anchor", "middle")
					   .attr("font-family", "sans-serif")
					   .attr("font-size", "11px")
					   .attr("font-weight", "bold")
					   .attr("fill", "black")
					   .text(h.country1+"%");
            // .text("Country: "+country[1]+"\nValue: "+h.country1+"%");



			   })
			   .on("mouseout", function() {

					//Remove the tooltip
					d3.select("#tooltip").remove();

			   })
         svg4.selectAll("rect").data(data).attr("fill",function(h){
              if(h.country1>=0){
                return "#e3a842";
              }
              else{
                return "#db3f0b";
              }
          })

       }
       if(country[2]!="#"&&!check[2]){
        check[2]=true;


        //Add X Axis
          var x = d3.scaleBand()
          .domain(data.map(function(h) { return h.data; }))


        .range([ 0, width2]);
        svg5.append("g")
          .attr("transform", "translate(70," + height + ")")
           .call(d3.axisBottom(x));
         //Add K Axis
         var k = d3.scaleOrdinal()
         .range([ 0, width2]);
        svg5.append("g")
          .attr("transform", "translate(70," + height/2 + ")")
           .call(d3.axisBottom(k));
       svg5.append("g")
         .attr("transform", "translate(70," + height + ")")
          .call(d3.axisBottom(x));

          if(country[0]!="#"&&country[1]!="#"){
            var hmax=d3.max(data, function(h) { return Math.max( +Math.abs(h.country2),+Math.abs(h.country1),+Math.abs(h.country0)); });
          }
          else{
            if (country[1]!="#"&&country[2]=="#"){
              var hmax=d3.max(data, function(h) { return Math.max( +Math.abs(h.country1),+Math.abs(h.country2)); });
            }
            else{
              if(country[0]!="#")
              var hmax=d3.max(data, function(h) { return Math.max( +Math.abs(h.country2),+Math.abs(h.country0)); });
              else
              var hmax=d3.max(data, function(h) { return  +Math.abs(h.country2); });
            }
          }
          //var hmax=d3.max([8])
        // Add Y axis
        var y = d3.scaleLinear()
          .domain([-hmax-1.5,hmax+1.5 ])
          .range([ height,0 ])
          svg5.append("g")
          .attr("transform", "translate(" +70+ ",0)")
          .call(d3.axisLeft(y));

          //BARS
          svg5.selectAll(".rect3")
			   .data(data)
			   .enter()
			   .append("rect")
         .attr("class","rect3")
         .attr("transform", "translate(" +80+ ",0)")
			   .attr("x", function(h) {

          return x(h.data);
          })
          .attr("y", function(h) {
              if(h.country2<0){
                  return height/2;
              }
              else{
                return  y(h.country2);
              }

          })

			   .attr("width", x.bandwidth()/2)

			   .attr("height", function(h) {
          return height/2 -y(Math.abs(h.country2));

			   })


			   .on("mouseover", function(h) {

					//Get this bar's x/y values, then augment for the tooltip
					var xPosition = parseFloat(d3.select(this).attr("x")) + x.bandwidth()+txt;
					var yPosition = parseFloat(d3.select(this).attr("y"))-5 ;

					//Create the tooltip label
					svg5.append("text")
					   .attr("id", "tooltip")
					   .attr("x", xPosition)
					   .attr("y", yPosition)
					   .attr("text-anchor", "middle")
					   .attr("font-family", "sans-serif")
					   .attr("font-size", "11px")
					   .attr("font-weight", "bold")
					   .attr("fill", "black")
					   .text(h.country2+"%");
            // .text("Country: "+country[2]+"\nValue: "+h.country2+"%");



			   })
			   .on("mouseout", function() {

					//Remove the tooltip
					d3.select("#tooltip").remove();

			   })
         svg5.selectAll("rect").data(data).attr("fill",function(h){
              if(h.country2>=0){
                return "#09c206";
              }
              else{
                return "#db3f0b";
              }
          })

       }



              }

            });


              });

            });




}
function clickToZoom(zoomStep) {
  svg
    .transition()
    .duration(ZOOM_DURATION)
    .call(zoom.scaleBy, zoomStep);
}

d3.select("#btn-zoom--in").on("click", () => clickToZoom(ZOOM_IN_STEP));
d3.select("#btn-zoom--out").on("click", () => clickToZoom(ZOOM_OUT_STEP));



const svg = d3
  .select("#mapchar")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%")

const g = svg.call(zoom).append("g");

g
  .append("rect")
  .attr("width", WIDTH * OVERLAY_MULTIPLIER)
  .attr("height", HEIGHT * OVERLAY_MULTIPLIER)
  .attr(
    "transform",
    `translate(-${WIDTH * OVERLAY_OFFSET},-${HEIGHT * OVERLAY_OFFSET})`
  )
  .style("fill", "none")
  .style("pointer-events", "all");



const projection = d3
  .geoMercator()
  .center([45,43])
  .scale(400)
  .translate([WIDTH / 2, HEIGHT / 2]);



const path = d3.geoPath().projection(projection);
/*
var color = d3.scaleQuantize()
								.range(["rgb(237,248,233)","rgb(186,228,179)","rgb(116,196,118)","rgb(49,163,84)","rgb(0,109,44)"]);
  color.domain([
                  1000,
                  0
                ]);*/
renderMap(europe,density);
d3.queue()
.defer(d3.csv, "/dataset/density2.csv")
.await(function(error, density) {
    if (error) throw error;})


function renderMap(root1) {

  // Draw districts and register event listeners
  d3.csv("/dataset/density2.csv",
                function(h){
                      return{country:h.country,value:h.value}
                },
                function(data){

                  g
                    .append("g")
                    .selectAll("path")
                    .data(root1.features)
                    .enter()
                    .append("path")
                    .attr("d", path)
                    .style("fill", function(d) {

                      for(var j=0;j<density.length;j++){

                        if(density[j].country.toString()==d.properties.NAME.toString()){

                          return "rgb(70, 70, " + (5000/Math.round(parseInt(density[j].value)*0.8)+100) + ")";
                        }
                      }
                  })

                    .attr("stroke", "#FFF")
                    .attr("stroke-width", 1)
                    .on("mouseover", mouseOverHandler)
                    .on("mouseout", mouseOutHandler)
                    .on("click", clickHandler);

                    // set the color of each country





                  g
                    .append("g")
                    .selectAll("text")
                    .data(root1.features)
                    .enter()
                    .append("text")
                    .attr("transform", d => `translate(${path.centroid(d)})`)
                    .attr("text-anchor", "middle")
                    .attr("font-size", 10)
                    .attr("dx", d => _.get(d, "offset[0]", null))
                    .attr("dy", d => _.get(d, "offset[1]", null))
                    .text(d => d.properties.name);


                });

}
