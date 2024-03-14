import { sum } from "../sum";
test("sum fn should calculate the sum of two nums",()=>{
    const res=sum(4,18);
    const res2=sum(4,8);
    expect(res).toBe(22);
    expect(res2).toBe(12);
});