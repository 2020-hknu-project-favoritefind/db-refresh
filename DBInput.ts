import { GetPlaceFromPublicAPI } from "./getApis";
import { FavoritePlaceDBQuery } from "./query";
import { GyeonggiAPIResponse, GyeonggiAPIResponseAcademy } from "./ApiInterface"

export class DBInput {
    public static Culture = class {
        public static async Cinema(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: Array<GyeonggiAPIResponse> = await api.MovieTheater();

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "교양", "영화관");
            })
        }

        public static async Theater(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponse[] = await api.Theater()

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "교양", "극장");
            })
        }
    }

    public static Leports = class {
        public static async Sports(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponse[] = await api.PhysicalTrainingCentre();
            result.concat(await api.PublicSportFacility());

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "레포츠", "스포츠");
            })
        }

        public static async Fishing(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponse[] = await api.FishingCentre();

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "레포츠", "낚시터");
            })
        }
    }

    public static Arts = class {
        public static async Cartoon(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("만화");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "예술", "만화");
            })
        }

        public static async Art(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("미술");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "예술", "미술");
            })
        }
    }

    public static Crafts = class {
        public static async Coding(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("컴퓨터");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "공예", "컴퓨터");
            })
        }

        public static async Making(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("공예");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "공예", "공예");
            })
        }
    }

    public static LanguageStudy = class {
        public static async Language(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("영어");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "어학", "외국어");
            })
        }

        public static async Speaking(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("논술");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "어학", "논술");
            })
        }
    }

    public static Dance = class {
        public static async ModernDance(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponse[] = await api.DanceAcademy();

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "춤", "현대무용");
            })
        }

        public static async Dancing(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("연극");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "춤", "연기");
            })
        }
    }

    public static Cooking = class {
        public static async Cook(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("요리");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "요리", "요리");
            })
        }

        public static async Barista(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("식음료품");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "요리", "바리스타");
            })
        }
    }

    public static Music = class {
        public static async Vocal(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("보컬");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "음악", "보컬");
            })
        }

        public static async Instrument(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("피아노");
            result.concat(await api.Academy("드럼"));

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "음악", "악기");
            })
        }

        public static async Karaoke(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponse[] = await api.Karaoke();

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "음악", "노래방");
            })
        }
    }

    public static Fashion = class {
        public static async Nail(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("네일");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "패션", "네일");
            })
        }

        public static async Beauty(api: GetPlaceFromPublicAPI, query: FavoritePlaceDBQuery): Promise<void> {
            let result: GyeonggiAPIResponseAcademy[] = await api.Academy("미용");

            result.forEach(async (i) => {
                await query.insertPlace(i.NAME, i.ADDRESS.PROVINCE, i.ADDRESS.CITY,
                    i.ADDRESS.FULL_ADDRESS, i.ADDRESS.LATITUDE, i.ADDRESS.LONGITUDE, i.TELEPHONE_NUM, "패션", "미용");
            })
        }
    }

}
