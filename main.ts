import { GetPlaceFromPublicAPI } from "./getApis";
import { FavoritePlaceDBQuery } from "./query";
import { DBInput } from "./DBInput"
import { key, db_pw } from "./password"

async function main() {
    const api = new GetPlaceFromPublicAPI(key);
    const sql = new FavoritePlaceDBQuery(db_pw);

    console.log("문화-영화관")
    await DBInput.Culture.Cinema(api, sql);

    console.log("문화-극장")
    await DBInput.Culture.Theater(api, sql);

    console.log("레포츠-스포츠")
    await DBInput.Leports.Sports(api, sql);

    console.log("레포츠-낚시터")
    await DBInput.Leports.Fishing(api, sql);

    console.log("미술-만화")
    await DBInput.Arts.Cartoon(api, sql);

    console.log("미술-기타미술")
    await DBInput.Arts.Art(api, sql);

    console.log("공예-컴퓨터")
    await DBInput.Crafts.Coding(api, sql);

    console.log("공예-공예")
    await DBInput.Crafts.Making(api, sql);

    console.log("어학-외국어")
    await DBInput.LanguageStudy.Language(api, sql);

    console.log("어학-논술")
    await DBInput.LanguageStudy.Speaking(api, sql);

    console.log("춤-연극")
    await DBInput.Dance.Dancing(api, sql);

    console.log("춤-현대무용")
    await DBInput.Dance.ModernDance(api, sql);

    console.log("요리-요리")
    await DBInput.Cooking.Cook(api, sql);

    console.log("요리-바리스타")
    await DBInput.Cooking.Barista(api, sql);

    console.log("음악-보컬")
    await DBInput.Music.Vocal(api, sql);

    console.log("음악-악기")
    await DBInput.Music.Instrument(api, sql);

    console.log("음악-노래방")
    await DBInput.Music.Karaoke(api, sql);

    console.log("패션-뷰티")
    await DBInput.Fashion.Beauty(api, sql);

    console.log("패션-네일")
    await DBInput.Fashion.Nail(api, sql);

    sql.end();
}

main();
