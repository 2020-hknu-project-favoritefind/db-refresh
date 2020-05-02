import Axios from "axios";

export default class GetPlaceFromPublicAPI {
    private key: string;

    public constructor(key: string) {
        this.key = key;
    }

    /**
     * 경기데이터드림 - [공공체육시설현황(생활)](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=C2V7PT97153860SH50324475843&infSeq=1)
     * @param page 페이지 위치 (기본 1)
     * @param size 페이지 당 요청 숫자 (기본 1000)
     */
    public async PublicSportFacility(page = 1, size = 1000): Promise<object[]> {
        let result: object[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/PublicLivelihood?KEY=${this.key}&Type=json&pIndex=${page}&pSize=${size}`);
            result = res.data["PublicLivelihood"][1]["row"];
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    /**
     * 경기데이터드림 - [체육도장업체현황_인허가](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&sortColumn=&sortDirection=&infId=M9L8CJ5197ZGJ7G86014712182&infSeq=1)
     * @param page 페이지 위치 (기본 1)
     * @param size 페이지 당 요청 숫자 (기본 1000)
     */
    public async PhysicalTrainingCentre(page = 1, size = 1000): Promise<object[]> {
        let result: object[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/PhysicalTraining?KEY=${this.key}&type=json&pIndex=${page}&pSize=${size}`);
            result = res.data["PhysicalTraining"][1]["row"];
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    /**
     * 경기데이터드림 - [낚시터 정보](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&sortColumn=&sortDirection=&infId=8M2AW008ZZ275DEX8997536167&infSeq=1)
     * @param page 페이지 위치 (기본 1)
     * @param size 페이지 당 요청 숫자 (기본 1000)
     */
    public async FishingCentre(page = 1, size = 1000): Promise<object[]> {
        let result: object[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/FISHPLCINFO?KEY=${this.key}&type=json&pIndex=${page}&pSize=${size}`);
            result = res.data["FISHPLCINFO"][1]["row"];
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    /**
     * 경기데이터드림 - [무도학원업체 현황_인허가](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&sortColumn=&sortDirection=&infId=AHRHFPPD5ML4B38Y68C01854844&infSeq=1)
     * @param page 페이지 위치 (기본 1)
     * @param size 페이지 당 요청 숫자 (기본 1000)
     */
    public async DanceAcademy(page = 1, size = 1000): Promise<object[]> {
        let result: object[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/DanceAcademy?KEY=${this.key}&type=json&pIndex=${page}&pSize=${size}`);
            result = res.data["DanceAcademy"][1]["row"];
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }
    /** 
     * 경기데이터드림 - [노래연습장업_인허가](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&sortColumn=&sortDirection=&infId=DTG5WLA687OMHJMFRXH627862292&infSeq=1)
     * @param page 페이지 위치 (기본 1)
     * @param size 페이지 당 요청 숫자 (기본 1000)
    */
    public async Karaoke(page = 1, size = 1000): Promise<object[]> {

        let result: object[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/sngrumIndutype?KEY=${this.key}&type=json&pIndex=${page}&pSize=${size}`);
            result = res.data["sngrumIndutype"][1]["row"];
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    /**
     * 경기데이터드림 - [학원및 교습소 현황](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=POQF9EVK5RB8XOPTEH3D21077469&infSeq=1)
     * @param page 페이지 위치 (기본 1)
     * @param size 페이지 당 요청 숫자 (기본 1000)
     */
    public async Academy(page = 1, size = 1000): Promise<object[]> {
        let result: object[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/TninsttInstutM?KEY=${this.key}&type=json&pIndex=${page}&pSize=${size}`);
            result = res.data["Tbinstutm"][1]["row"];
        } catch (error) {
            console.error(error)
        } finally {
            return result;
        }
    }

    /**
     * 경기데이터드림 - [영화 상영관 현황_인허가](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=W4X5359M8398463DP26M1395912&infSeq=1)
     * @param page 페이지 위치 (기본 1)
     * @param size 페이지 당 요청 숫자 (기본 1000)
     */
    public async MovieTheater(page = 1, size = 1000): Promise<object[]> {
        let result: object[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/MovieTheater?KEY=${this.key}&type=json&pIndex=${page}&pSize=${size}`);
            result = res.data["MovieTheater"][1]["row"];
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    /**
     * 경기데이터드림 - [공연장 현황_인허가](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&sortColumn=&sortDirection=&infId=N4LY6H5VP5047641W5DQ1742165&infSeq=1)
     * @param page 페이지 위치 (기본 1)
     * @param size 페이지 당 요청 숫자 (기본 1000)
     */
    public async Theater(page = 1, size = 1000): Promise<object[]> {
        let result: object[] = [];
        try {
            let res = await Axios.get(`https://openapi.gg.go.kr/PerformPlace?KEY=${this.key}&type=json&pIndex=${page}&pSize=${size}`);
            result = res.data["PerformPlace"][1]["row"];
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }
}
