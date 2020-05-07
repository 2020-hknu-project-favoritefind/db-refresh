/**
 * 경기데이터드림 API 반환값
 * @property {string} SIGUN_NM 시/군 정보
 * @property {string} REFINE_ROADNM_ADDR 도로명주소
 * @property {number} REFINE_WGS84_LAT WGS84 위도
 * @property {number} REFINE_WGS84_LOGT WGS84 경도
 */
interface GyeonggiAPIResponse {
    SIGUN_NM: string
    REFINE_ROADNM_ADDR: string
    REFINE_WGS84_LAT: number
    REFINE_WGS84_LOGT: number
}

interface GyeonggiAPIResponseContact {
    CONTCT_NO: string
}

interface GyeonggiAPIResponseTelNo {
    LOCPLC_FACLT_TELNO: string
}

interface GyeonggiAPIResponseFacility {
    FACLT_NM: string
}

interface GyeonggiAPIResponseBiz {
    BIZPLC_NM: string
}

export interface GyeonggiAPIResponsePublicSports extends GyeonggiAPIResponse, GyeonggiAPIResponseFacility, GyeonggiAPIResponseContact { }

export interface GyeonggiAPIResponsePhysicalTraining extends GyeonggiAPIResponse, GyeonggiAPIResponseBiz { }

export interface GyeonggiAPIResponseFishing extends GyeonggiAPIResponse {
    FISHPLC_NM: string
}

export interface GyeonggiAPIResponseDancingAcademy extends GyeonggiAPIResponse, GyeonggiAPIResponseBiz, GyeonggiAPIResponseTelNo { }

export interface GyeonggiAPIResponseKaraoke extends GyeonggiAPIResponse, GyeonggiAPIResponseBiz, GyeonggiAPIResponseTelNo { }

export interface GyeonggiAPIResponseAcademy extends GyeonggiAPIResponse, GyeonggiAPIResponseFacility {
    CRSE_CLASS_NM: string
    TELNO: string
}

export interface GyeonggiAPIResponseMovieTheater extends GyeonggiAPIResponse, GyeonggiAPIResponseBiz { }

export interface GyeonggiAPIResponseTheater extends GyeonggiAPIResponse, GyeonggiAPIResponseBiz { }