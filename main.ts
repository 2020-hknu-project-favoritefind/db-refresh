import { GetPlaceFromPublicAPI } from "./getApis";
import { FavoritePlaceDBQuery } from "./query";
import { DBInput } from "./DBInput"
import { key, db_pw } from "./password"

async function main() {
    const api = new GetPlaceFromPublicAPI(key);
    const sql = new FavoritePlaceDBQuery(db_pw);

    if (process.argv.indexOf("-CUc") != -1) {
        console.log("문화-영화관")
        await DBInput.Culture.Cinema(api, sql);
    }

    if (process.argv.indexOf("-CUt") != -1) {
        console.log("문화-극장")
        await DBInput.Culture.Theater(api, sql);
    }

    if (process.argv.indexOf("-LEs") != -1) {
        console.log("레포츠-스포츠")
        await DBInput.Leports.Sports(api, sql);
    }

    if (process.argv.indexOf("-LEf") != -1) {
        console.log("레포츠-낚시터")
        await DBInput.Leports.Fishing(api, sql);
    }

    if (process.argv.indexOf("-ARc") != -1) {
        console.log("미술-만화")
        await DBInput.Arts.Cartoon(api, sql);
    }

    if (process.argv.indexOf("-ARa") != -1) {
        console.log("미술-기타미술")
        await DBInput.Arts.Art(api, sql);
    }

    if (process.argv.indexOf("-CRc") != -1) {
        console.log("공예-컴퓨터")
        await DBInput.Crafts.Coding(api, sql);
    }

    if (process.argv.indexOf("-CRm") != -1) {
        console.log("공예-공예")
        await DBInput.Crafts.Making(api, sql);
    }

    if (process.argv.indexOf("-LAl") != -1) {
        console.log("어학-외국어")
        await DBInput.LanguageStudy.Language(api, sql);
    }

    if (process.argv.indexOf("-LAs") != -1) {
        console.log("어학-논술")
        await DBInput.LanguageStudy.Speaking(api, sql);
    }

    if (process.argv.indexOf("-DAd") != -1) {
        console.log("춤-연극")
        await DBInput.Dance.Dancing(api, sql);
    }

    if (process.argv.indexOf("-DAm") != -1) {
        console.log("춤-현대무용")
        await DBInput.Dance.ModernDance(api, sql);
    }

    if (process.argv.indexOf("-COc") != -1) {
        console.log("요리-요리")
        await DBInput.Cooking.Cook(api, sql);
    }

    if (process.argv.indexOf("-COb") != -1) {
        console.log("요리-바리스타")
        await DBInput.Cooking.Barista(api, sql);
    }

    if (process.argv.indexOf("-MUv") != -1) {
        console.log("음악-보컬")
        await DBInput.Music.Vocal(api, sql);
    }

    if (process.argv.indexOf("-MUi") != -1) {
        console.log("음악-악기")
        await DBInput.Music.Instrument(api, sql);
    }

    if (process.argv.indexOf("-MUk") != -1) {
        console.log("음악-노래방")
        await DBInput.Music.Karaoke(api, sql);
    }

    if (process.argv.indexOf("-FAb") != -1) {
        console.log("패션-뷰티")
        await DBInput.Fashion.Beauty(api, sql);
    }

    if (process.argv.indexOf("-FAn") != -1) {
        console.log("패션-네일")
        await DBInput.Fashion.Nail(api, sql);
    }

    sql.end();
}

main();
