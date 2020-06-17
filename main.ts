import { GetPlaceFromPublicAPI } from "./getApis";
import { FavoritePlaceDBQuery } from "./query";
import { DBInput } from "./DBInput"
import { key, db_pw } from "./password"

async function main() {
    if (process.argv.length <= 2) {

    }

    const api = new GetPlaceFromPublicAPI(key);
    const sql = new FavoritePlaceDBQuery(db_pw);
    await DBInput.PublicSports(api, sql);
    await DBInput.TrainingCentre(api, sql);
    await DBInput.FishingCentre(api, sql);
    await DBInput.DanceAcademy(api, sql);
    await DBInput.Karaoke(api, sql);
    await DBInput.Movie(api, sql);
    await DBInput.Theater(api, sql);
    sql.end();
}

main();
