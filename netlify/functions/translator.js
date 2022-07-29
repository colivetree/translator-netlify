exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify(translateText("perro caliente","PT").json())
  }
}

async function translateText(text,target_lang) {
  const url = 'https://api-free.deepl.com/v2/translate?auth_key=102611f2-b07b-70b6-b864-0fa75f8819cd:fx&text='+encodeURIComponent(text)+'&target_lang='+target_lang;
  console.log(url)
  return response = await fetch(url);
}
