// Défi 1 - Trouver un flag caché dans le code source
function checkFlag1() {
  const userFlag = document.getElementById('flag1').value;
  const correctFlag = 'CTF{hidden_in_source}'; // Ce flag est visible dans le code source
  
  if (userFlag === correctFlag) {
    document.getElementById('response1').innerText = '✅ Flag trouvé !';
    // Une fois le défi 1 réussi, afficher le défi 2
    document.getElementById('challenge2').style.display = 'block';
  } else {
    document.getElementById('response1').innerText = '❌ Mauvais flag, essaie encore.';
  }
}

// Défi 2 - Flag encodé en base64
const base64Flag = btoa('CTF{base64_flag}');
function checkFlag2() {
  const userFlag = document.getElementById('flag2').value;
  const decodedFlag = atob(base64Flag);

  if (userFlag === decodedFlag) {
    document.getElementById('response2').innerText = '✅ Flag décodé !';
    // Une fois le défi 2 réussi, afficher le défi 3
    document.getElementById('challenge3').style.display = 'block';
  } else {
    document.getElementById('response2').innerText = '❌ Mauvais flag, essaie encore.';
  }
}

// Défi 3 - Trouver un flag caché dans les cookies
(function() {
  document.cookie = 'cookie_flag=CTF{cookie_monster}';
})();

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) return cookie[1];
  }
  return null;
}

function checkFlag3() {
  const userFlag = document.getElementById('flag3').value;
  const cookieFlag = getCookie('cookie_flag');

  if (userFlag === cookieFlag) {
    document.getElementById('response3').innerText = '✅ Cookie flag trouvé !';
  } else {
    document.getElementById('response3').innerText = '❌ Mauvais flag, essaie encore.';
  }
}
