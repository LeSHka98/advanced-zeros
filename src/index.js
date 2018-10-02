module.exports = function getZerosCount(number, base) {
  var mas =[],povt=[],p=[],res=[];
  var div = 2,i = 0; // base - основание системы счиления
  while (base > 1)
  {
      if(base % div == 0)
      {
          mas[i]= div;
          povt[i] = 0;
          while (base % div == 0)
          {
              base = base / div;
              povt[i]+=1;
          }
          i++;
      }
      if (div == 2) div++;
      else div += 2;
  }

  for(var i = 0,kol = mas.length;i < kol;i++)
  {
      p[i] = maxPowerOf( mas[i],number);
      res[i]=Math.floor(p[i]/povt[i]);
  }

  min = res[0];
  for(var i=0;i<mas.length;i++)
  {
      if(res[i]<min)min=res[i];
  }
  return min;

  function maxPowerOf( p,  number)
  {
      var k = 0;
      var powerOfP = 1;
      while (true)
      {
          powerOfP *= p;
          var addend = Math.floor(number / powerOfP);
          if (addend == 0)return k;  
          k += addend;
      }
  }
}