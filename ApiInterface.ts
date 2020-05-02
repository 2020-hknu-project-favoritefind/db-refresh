/**
 * 경기데이터드림 API 반환값
 * @property {string} SIGUN_NM 시/군 정보
 * @property {string} CONTCT_NO 전화번호
 * @property {string} HMPG_ADDR 홈페이지
 * @property {string} REFINE_ROADNM_ADDR 도로명주소
 * @property {number} REFINE_ZIP_CD 우편번호
 * @property {number} REFINE_WGS84_LAT WGS84 위도
 * @property {number} REFINE_WGS84_LOGT WGS84 경도
 */
interface GyeonggiAPIResponse {
    SIGUN_NM: string,
    CONTCT_NO: string,
    HMPG_ADDR: string,
    REFINE_ROADNM_ADDR: string,
    REFINE_ZIP_CD: number,
    REFINE_WGS84_LAT: number,
    REFINE_WGS84_LOGT: number
}

interface GyeonggiAPIResponseFacility extends GyeonggiAPIResponse {
    FACLT_NM: string
}

interface GyeonggiAPIResponseBiz extends GyeonggiAPIResponse {
    BIZPLC_NM: string
}
