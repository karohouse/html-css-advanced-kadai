let num = 15

if ((num % 3) == 0 ) {
  console.log('３の倍数です');
}

if (((num % 5) == 0 ) {
  console.log('５の倍数です');
}

if ((num % 3) == 0 || ((num % 5) == 0 ) {
  console.log('3と5の倍数です');
}

else {
  console.log(num);
}