import { GetPlaceFromPublicAPI } from "./getApis";
import { FavoritePlaceDBQuery } from "./query";
import { key, db_pw } from "./password"

async function main() {
    const api = new GetPlaceFromPublicAPI(key);
    const sql = new FavoritePlaceDBQuery(db_pw);
    await PublicSportsInput(api, sql);
    await TrainingCentreInput(api, sql);
    await FishingCentreInput(api, sql);
    await DanceAcademy(api, sql);
    await KaraokeInput(api, sql);
    await MovieInput(api, sql);
    await TheaterInput(api, sql);
    sql.end();
}

main();

function parseProvinceFromAddress(address: string): string {
    let result = /^\S*도/.exec(address);
    if (result) { return result[0] } else { return "" }
}

async function PublicSportsInput(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery) {
    try {
        let result = await api.PublicSportFacility();
        result.forEach(async el => {
            await query.insertPlace(el.FACLT_NM, parseProvinceFromAddress(el.REFINE_ROADNM_ADDR), el.SIGUN_NM, el.REFINE_ROADNM_ADDR, el.REFINE_WGS84_LAT, el.REFINE_WGS84_LOGT, el.CONTCT_NO, "레포츠", "스포츠");
        });
    } catch (error) {
        console.error(error);
    }
}

async function TrainingCentreInput(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery) {
    try {
        let result = await api.PhysicalTrainingCentre();
        result.forEach(async el => {
            await query.insertPlace(el.BIZPLC_NM, parseProvinceFromAddress(el.REFINE_ROADNM_ADDR), el.SIGUN_NM, el.REFINE_ROADNM_ADDR, el.REFINE_WGS84_LAT, el.REFINE_WGS84_LOGT, "null", "레포츠", "스포츠");
        })
    } catch (error) {
        console.error(error);
    }
}

async function FishingCentreInput(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery) {
    try {
        let result = await api.FishingCentre();
        result.forEach(async el => {
            await query.insertPlace(el.FISHPLC_NM, parseProvinceFromAddress(el.REFINE_ROADNM_ADDR), el.SIGUN_NM, el.REFINE_ROADNM_ADDR, el.REFINE_WGS84_LAT, el.REFINE_WGS84_LOGT, "null", "레포츠", "스포츠");
        })
    } catch (error) {
        console.error(error);
    }
}

async function DanceAcademy(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery) {
    try {
        let result = await api.DanceAcademy();
        result.forEach(async el => {
            await query.insertPlace(el.BIZPLC_NM, parseProvinceFromAddress(el.REFINE_ROADNM_ADDR), el.SIGUN_NM, el.REFINE_ROADNM_ADDR, el.REFINE_WGS84_LAT, el.REFINE_WGS84_LOGT, "null", "춤", "학원");
        })
    } catch (error) {
        console.error(error);
    }
}

async function KaraokeInput(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery) {
    try {
        let result = await api.Karaoke();
        result.forEach(async el => {
            await query.insertPlace(el.BIZPLC_NM, parseProvinceFromAddress(el.REFINE_ROADNM_ADDR), el.SIGUN_NM, el.REFINE_ROADNM_ADDR, el.REFINE_WGS84_LAT, el.REFINE_WGS84_LOGT, "null", "음악", "노래방");
        })
    } catch (error) {
        console.error(error);
    }
}

async function MovieInput(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery) {
    try {
        let result = await api.MovieTheater();
        result.forEach(async el => {
            await query.insertPlace(el.BIZPLC_NM, parseProvinceFromAddress(el.REFINE_ROADNM_ADDR), el.SIGUN_NM, el.REFINE_ROADNM_ADDR, el.REFINE_WGS84_LAT, el.REFINE_WGS84_LOGT, "null", "교양", "영화관");
        })
    } catch (error) {
        console.error(error);
    }
}

async function TheaterInput(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery) {
    try {
        let result = await api.Theater();
        result.forEach(async el => {
            await query.insertPlace(el.BIZPLC_NM, parseProvinceFromAddress(el.REFINE_ROADNM_ADDR), el.SIGUN_NM, el.REFINE_ROADNM_ADDR, el.REFINE_WGS84_LAT, el.REFINE_WGS84_LOGT, "null", "교양", "극장");
        })
    } catch (error) {
        console.error(error);
    }
}