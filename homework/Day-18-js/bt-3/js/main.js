function numberToWords(number) {
    const units = ['', 'Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín'];
    const teens = ['', 'Mười', 'Hai Mươi', 'Ba Mươi', 'Bốn Mươi', 'Năm Mươi', 'Sáu Mươi', 'Bảy Mươi', 'Tám Mươi', 'Chín Mươi'];
    const hundreds = ['', 'Một Trăm', 'Hai Trăm', 'Ba Trăm', 'Bốn Trăm', 'Năm Trăm', 'Sáu Trăm', 'Bảy Trăm', 'Tám Trăm', 'Chín Trăm'];
  
    function convertLessThanOneThousand(num) {
      if (num === 0) {
        return '';
      } else if (num < 10) {
        return units[num];
      } else if (num < 20) {
        return teens[num - 10];
      } else {
        const unitDigit = num % 10;
        const tenDigit = Math.floor(num / 10) % 10;
        const hundredDigit = Math.floor(num / 100);
  
        return `${hundreds[hundredDigit]} ${teens[tenDigit]} ${units[unitDigit]}`.trim();
      }
    }
  
    function convertLessThanTenThousand(num) {
      const thousandDigit = Math.floor(num / 1000);
      const rest = num % 1000;
  
      if (thousandDigit === 0) {
        return convertLessThanOneThousand(rest);
      } else {
        return `${convertLessThanOneThousand(thousandDigit)} Nghìn ${convertLessThanOneThousand(rest)}`.trim();
      }
    }
  
    if (isNaN(number) || number < 0 || number > 9999) {
      return 'Ràng buộc: Số cần chuyển đổi có giá trị từ 0 đến 9999';
    }
  
    if (number === 0) {
      return 'Không';
    } else {
      return convertLessThanTenThousand(number);
    }
  }
  
  const inputNumber = 4298;
  const wordsResult = numberToWords(inputNumber);
  
  console.log(wordsResult);