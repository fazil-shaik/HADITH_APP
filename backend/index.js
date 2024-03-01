// mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/bufferappcom.json
// mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/twittercom-legacy.json

const express = require('express')
const cors = require('cors')
require('dotenv').config();
const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send('server working fine')
})

app.get('/api/hadith',(req,res)=>{
    const data = [
        {
            "id": 1,
            "content": "Actions are judged by intentions.",
            "reference": "{Sahih al-Bukhari, Book 1, Hadith 1}"
        },
        {
            "id": 2,
            "content": "The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended.",
            "reference": "{Sahih al-Bukhari, Book 1, Hadith 1}"
        },
        {
            "id": 3,
            "content": "The best amongst you are those who have the best manners and character.",
            "reference": "{Sahih al-Bukhari, Book 76, Hadith 3}"
}       ,
        {
            "id": 4,
            "content": "The strongest among you is the one who controls his anger.",
            "reference": "{Sahih al-Bukhari, Book 73, Hadith 135}"
        },
        {
            "id": 5,
            "content": "Do not be people without minds of your own, saying that if others treat you well you will treat them well, and that if they do wrong you will do wrong. But (instead) accustom yourselves to do good if people do good and not to do wrong if they do evil.",
            "reference": "{Sahih al-Bukhari, Book 78, Hadith 128}"
        },
        {
            "id": 6,
            "content": "A believer does not taunt, curse, abuse or talk indecently.",
            "reference": "{Sahih al-Bukhari, Book 78, Hadith 120}"
        },
        {
            "id": 7,
            "content": "The most hated person in the sight of Allah is the most quarrelsome person.",
            "reference": "{Sahih al-Bukhari, Book 78, Hadith 56}"
        },
        {
            "id": 8,
            "content": "A Muslim is one who avoids harming Muslims with his tongue and hands.",
            "reference": "{Sahih al-Bukhari, Book 78, Hadith 120}"
        },
        {
            "id": 9,
            "content": "None of you truly believes until he wishes for his brother what he wishes for himself.",
            "reference": "{Sahih al-Bukhari, Book 2, Hadith 12}"
        },
        {
            "id": 10,
            "content": "The best charity is that given when one has surplus wealth.",
            "reference": "{Sahih al-Bukhari, Book 24, Hadith 524}"
        },
        {
            "id": 11,
            "content": "The Prophet (peace be upon him) said: \"None of you will have faith till he wishes for his (Muslim) brother what he likes for himself.\"",
            "reference": "{Sahih al-Bukhari, Book 2, Hadith 13}"
        },
        {
            "id": 12,
            "content": "Whoever believes in Allah and the Last Day, should speak what is good or keep silent.",
            "reference": "{Sahih al-Bukhari, Book 78, Hadith 29}"
        },
        {
            "id": 13,
            "content": "A good word is charity.",
            "reference": "{Sahih al-Bukhari, Book 78, Hadith 36}"
        },
        {
            "id": 14,
            "content": "Modesty does not bring anything except good.",
            "reference": "{Sahih al-Bukhari, Book 73, Hadith 139}"
        },
        {
            "id": 15,
            "content": "The Prophet (peace be upon him) said: \"A Muslim is the one who avoids harming Muslims with his tongue and hands. And a Muhajir (emigrant) is the one who gives up (abandons) all what Allah has forbidden.\"",
            "reference": "{Sahih al-Bukhari, Book 2, Hadith 36}"
        },
        {
            "id": 16,
            "content": "A true believer does not involve himself in taunting, or frequently cursing (others) or in indecency or abusing.",
            "reference": "{Sahih al-Bukhari, Book 78, Hadith 120}"
        },
        {
            "id": 17,
            "content": "The Prophet (peace be upon him) said: \"The Muslim is the one from whose tongue and hands the Muslims are safe; and the Muhajir (emigrant) is the one who refrains from what Allah has forbidden.\"",
            "reference": "{Sahih al-Bukhari, Book 2, Hadith 36}"
        },
        {
            "id": 18,
            "content": "The Prophet (peace be upon him) said: \"Beware of suspicion, for suspicion is the worst of false tales.\"",
            "reference": "{Sahih al-Bukhari, Book 78, Hadith 135}"
        },
        {
            "id": 19,
            "content": "The Prophet (peace be upon him) said: \"Whoever believes in Allah and the Last Day, should not hurt his neighbor and whoever believes in Allah and the Last Day, should serve his guest generously and whoever believes in Allah and the Last Day, should speak what is good or keep silent.\"",
            "reference": "{Sahih al-Bukhari, Book 2, Hadith 18}"
        },
        {
            "id": 20,
            "content": "The Prophet (peace be upon him) said: \"He who believes in Allah  and the Last Day must either speak good or remain silent.\"",
            "reference": "{Sahih al-Bukhari, Book 78, Hadith 169}"
        }
    ]
    res.send(data);    
})

app.listen(process.env.PORT,()=>{
    console.log(`listening at ${process.env.PORT}`)
});