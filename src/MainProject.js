import React, { useState, useEffect } from "react";
// import { saveAs } from 'file-saver'
let sourceimage = "";
let nameoftype = "";
const hro = 1000;
const g = 9.81;
const pi = 3.14;
const MP = () => {
  const [UH1, setUH1] = useState("");
  const [SDO1, setSDO1] = useState("");
  const [ω, setω] = useState("");
  const [ω1, setω1] = useState("");
  const [Pt1, setPt1] = useState("");
  const [H3, setH3] = useState("");
  const [Z, setZ] = useState("");
  const [HCP, setHCP] = useState("");
  const [V1, setV1] = useState("");
  const [D2, setD2] = useState("");
  const [FH1, setFH1] = useState("");
  const [ε1, setε1] = useState("");
  const [HRP, setHRP] = useState("");
  const [Q3, setQ3] = useState("");
  const [V, setV] = useState("");
  const [D1, setD1] = useState("");
  const [Q2, setQ2] = useState("");
  const [SDO, setSDO] = useState("");
  const [D, setD] = useState("");
  const [UH, setUH] = useState("");
  const [CTC, setCTC] = useState("");
  const [alpha, setalpha] = useState("");
  const [FH, setFH] = useState("");
  const [ε, setε] = useState("");
  const [S, setS] = useState("");
  const [Sc, setSc] = useState("");
  const [changecheckbox, setchangecheckbox] = useState(false);
  const [changecheckbox1, setchangecheckbox1] = useState(false);
  const [changecheckbox2, setchangecheckbox2] = useState(false);
  const [changecheckbox3, setchangecheckbox3] = useState(false);
  const [changecheckbox4, setchangecheckbox4] = useState(false);
  const [changecheckbox5, setchangecheckbox5] = useState(false);
  const [changecheckbox6, setchangecheckbox6] = useState(false);
  const [changecheckbox7, setchangecheckbox7] = useState(false);
  const [changecheckbox8, setchangecheckbox8] = useState(false);
  const [PE, setPE] = useState("");
  const [fj, setfj] = useState("");
  const [ft, setft] = useState("");
  const [eg, seteg] = useState("");
  const [et, setet] = useState("");
  const [hj, sethj] = useState("");
  const [hg, sethg] = useState("");
  const [Q, setQ] = useState("");
  const [Q1, setQ1] = useState("");
  const [H, setH] = useState("");
  const [H1, setH1] = useState("");
  const [ηt, setηt] = useState(5);
  const [Pt, setPt] = useState("");
  const [ƒ, setƒ] = useState("");
  const [ƒ1, setƒ1] = useState("");
  const [ς, setς] = useState("");
  

  function calD1(e) {
    setD1(e.target.value);
  }
  function calD(e) {
    setD(e.target.value);
  }
  function calCTC(e) {
    setCTC(e.target.value);
  }
  function calalpha(e) {
    setalpha(e.target.value);
  }
  function calS(e) {
    setS(e.target.value);
  }
  function calSc(e) {
    setSc(e.target.value);
  }
  function calfj(e) {
    setfj(e.target.value);
  }
  function calft(e) {
    setft(e.target.value);
  }
  function caleg(e) {
    seteg(e.target.value);
  }
  function calet(e) {
    setet(e.target.value);
  }
  function calhj(e) {
    sethj(e.target.value);
  }
  function calhg(e) {
    sethg(e.target.value);
  }
  function calQ(e) {
    setQ(e.target.value);
  }
  function calQ1(e) {
    setQ1(e.target.value);
  }
  function calH(e) {
    setH(e.target.value);
  }
  function calH1(e) {
    setH1(e.target.value);
  }
  function calηt(e) {
    setηt(e.target.value);
  }
  function calQ2(e) {
    setQ2(e.target.value);
  }
  function calQ3(e) {
    setQ3(e.target.value);
  }
  function calε1(e) {
    setε1(e.target.value);
  }
  function calFH1(e) {
    setFH1(e.target.value);
  }
  function calD2(e) {
    setD2(e.target.value);
  }
  function calV1(e) {
    setV1(e.target.value);
  }
  function calZ(e) {
    setZ(e.target.value);
  }
  function calH3(e) {
    setH3(e.target.value);
  }
  function calPt1(e) {
    setPt1(e.target.value);
  }
  function calω1(e) {
    setω1(e.target.value);
  }
  function calƒ1(e) {
    setƒ1(e.target.value);
  }
  function calUH1(e) {
    setUH1(e.target.value);
  }
  function calSDO1(e) {
    setSDO1(e.target.value);
  }

  useEffect(() => {
    function realfunction8() {
      if (changecheckbox8) {
        setω1(ω);
      }
      if (!changecheckbox8) {
        setω1("");
      }
    }
    realfunction8();
  }, [changecheckbox8, ω] );

  useEffect(() => {
    function realfunction7() {
      if (changecheckbox7) {
        setH3(H);
        setPt1(Pt);
      }
      if (!changecheckbox7) {
        setH3("");
        setPt1("");
      }
    }
    realfunction7();
  }, [changecheckbox7, H, Pt] );

  useEffect(() => {
    function realfunction6() {
      if (changecheckbox6) {
        setQ(Q3);
        setH(HRP);
      }
      if (!changecheckbox6) {
        setQ("");
        setH("");
      }
    }
    realfunction6();
  }, [changecheckbox6, Q3, HRP] );


  useEffect(() => {
    function realfunction5() {
      if (changecheckbox5) {
        setD2(D1);
      }
      if (!changecheckbox5) {
        setD2("");
      }
    }
    realfunction5();
  }, [changecheckbox5, D1] );


  useEffect(() => {
    function realfunction4() {
      if (changecheckbox4) {
        setε1(ε);
        setFH1(FH);
      }
      if (!changecheckbox4) {
        setε1("");
        setFH1("");
      }
    }
    realfunction4();
  }, [changecheckbox4, ε, FH]);

  useEffect(() => {
    function realfunction3() {
      if (changecheckbox3) {
        setQ3(Q2);
        setUH1(UH);
        setSDO1(SDO);
      }
      if (!changecheckbox3) {
        setQ3("");
        setUH1("");
        setSDO1("");
      }
    }
    realfunction3();
  }, [changecheckbox3, Q2,UH,SDO]);

  useEffect(() => {
    function realfunction2() {
      if (changecheckbox2) {
        setD1(D);
        setQ2(Q);
      }
      if (!changecheckbox2) {
        setD1("");
        setQ2("");
      }
    }
    realfunction2();
  }, [changecheckbox2, D, Q]);

  useEffect(() => {
    function realfunction1() {
      if (changecheckbox1) {
        setalpha(1);
        setCTC(0.09);
      }
      if (!changecheckbox1) {
        setalpha("");
        setCTC("");
      }
    }
    realfunction1();
  }, [changecheckbox1]);

  useEffect(() => {
    function realfunction() {
      if (changecheckbox) {
        sethg(0.07);
        sethj(0.01);
        setet(0.85);
        seteg(0.9);
        setft(0.1);
        setfj(0.01);
        setQ1(Q3);
        setH1(HRP);
      }
      if (!changecheckbox) {
        sethg("");
        sethj("");
        setet("");
        seteg("");
        setft("");
        setfj("");
        setQ1("");
        setH1("");
      }
    }
    realfunction();
  }, [changecheckbox, Q3, HRP]);

  function eventCalculate_1() {
    setPt(Number(hro) * Number(g) * Number(Q) * Number(H) * (String(ηt) / 100));
  }
  function eventCalculate_2() {
    setPE(
      Number(hro) *
        g *
        Number(Q1) *
        (Number(H1) - Number(hg) + Number(hj)) *
        Number(et) *
        Number(eg) *
        (1 - Number(ft)) *
        (1 - Number(fj))
    );
  }

  function eventCalculate_3() {
    setε(Number(Sc) / Number(S));
  }
  function eventCalculate_4() {
    setFH(Math.sqrt(1 / Number(alpha) + Number(CTC)));
  }

  function eventCalculate_5() {
    setUH(Number(ε1) * Number(FH1));
  }

  function eventCalculate_6() {
    setSDO((Number(pi) * Number(Math.pow(D, 2))) / 4);
  }
  function eventCalculate_7() {
    setV((4 * Number(Q2)) / (Number(ε) * pi * Number(Math.pow(D1, 2))));
  }
  function eventCalculate_8() {
    setHRP(
      (Number(Math.pow(Number(Q3), 2)) / Number(Math.pow(Number(UH1), 2))) *
        Number(Math.pow(Number(SDO1), 2)) *
        2 *
        g
    );
  }
  function eventCalculate_9() {
    setHCP(
      0.5 * Number(D2) * Math.pow(Number(V1) / Math.sqrt(g * Number(D2)), 0.55)
    );
  }
  function eventCalculate_10() {
    setω(
      (Number(Z) * Math.sqrt(Number(hro)) * Math.pow(g * Number(H3), 5 / 4)) /
        Math.sqrt(Number(Pt1))
    );
  }
  function eventCalculate_11() {
    setƒ( (Number(ω1) / (2 * pi) ));
  }
  function eventCalculate_12() {
    setς( 50 /  (Number(ƒ1) ));
  }
  if (ηt <= 55) {
    nameoftype = "Пелтон (ковшова)";
    sourceimage =
      "https://www.tyazhmash.com/r/_content/32013ce4ad24862062adcfc2daf60c2e/pelton-2.png";
  }
  if (ηt <= 65 && ηt > 55) {
    nameoftype = "Тюрго";
    sourceimage =
      "https://tamarhydro.com.au/wp-content/uploads/2015/06/Turgo_Hydro_Turbines1.png";
  }
  if (ηt <= 75 && ηt > 65) {
    nameoftype = "Томсон(пропе-лерна)";
    sourceimage =
      "https://st.depositphotos.com/1734770/4166/i/600/depositphotos_41661599-stock-photo-speedboat-propeller.jpg";
  }
  if (ηt <= 80 && ηt > 75) {
    nameoftype = "Шнекова";
    sourceimage =
      "https://img.directindustry.com/images_di/photo-mg/29492-8247036.jpg";
  }
  if (ηt <= 85 && ηt > 80) {
    nameoftype = "Каплан(пово-ротно-лопатева)";
    sourceimage =
      "https://www.tyazhmash.com/r/_content/3b9d96849c21d023021a1a2350b55d41/kaplan-8-meters-v2-s.png";
  }
  if (ηt <= 95 && ηt > 85) {
    nameoftype = "Френсіс(радіально-осьова)";
    sourceimage =
      "https://www.tyazhmash.com/f/1/products/hydro/hydraturbines/francis/francis.png";
  }

  return (
    <>
      <div className="main_containar">
        <div className="PowerTurbin">
          <h1 className="FormulaHeader">
            Потужність, яка розвивається гідротурбіною
          </h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="Formula">
            {" "}
            P<sub>T</sub> = <span>&rho;</span> ⋅ g ⋅ Q ⋅ Н ⋅ η <sub>T</sub>
          </b>
          <h1 className="FormulaVariables"> Змінні </h1>
          <b className="rho">
            &rho;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;кг/м
            <sup>3</sup>
          </b>
          <span className="rhotext">Густина води</span>
          <input className="rhoinput" type="number" value={hro} readOnly />
          <b className="g">
            g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м/с
            <sup>2</sup>{" "}
          </b>
          <span className="gtext">Прискорення вільного падіння</span>
          <input className="ginput" type="number" value={g} readOnly />
          <b className="Q">
            Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;л/с{" "}
          </b>
          <span className="Qtext">Витрата води</span>
          <input className="Qinput" type="number" value={Q} onChange={calQ} />
          <b className="H">
            Н&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м{" "}
          </b>
          <span className="Htext">Робочий напір</span>
          <input className="Hinput" type="number" value={H} onChange={calH} />
          <b className="ηT">
            η<sub>T</sub>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%
          </b>
          <span className="ηTtext">Повний ККД турбіни</span>
          <input className="ηTinput" type="number" value={ηt} readOnly />
          <input
            className="KKD"
            type="range"
            min="5"
            max="95"
            step="5"
            onChange={calηt}
          />
          <h1 className="FormulaResultHeader"> Результат Вт: </h1>
          <input
            className="FormulaResult"
            name="result"
            type="number"
            value={!Pt ? Pt : Pt.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormula"
            onClick={eventCalculate_1}
            value="Обчислити"
          />
          <label className="LabelTypeOfTurbins">
            Рекомендована турбіна під ККД:{" "}
          </label>
          <label className="NameTypeOfTurbins"> {nameoftype} </label>
          <div className="TypeTurbinsImage">
            {" "}
            <img
              className="TypeTurbinsCurrentImg"
              src={sourceimage}
              alt="Тип Турбіни"
            />
          </div>
          <b className="RecomendVariablesPowerTurbin">
            {" "}
            Використати попередньо розраховані значаення?{" "}
            <input
              type="checkbox"
              className="qwe"
              onClick={(e) => setchangecheckbox6(!changecheckbox6)}
            />
          </b>
        </div>

        <div className="ElectricPowerGenerator">
          <h1 className="FormulaHeader">Електрична потужність генератора</h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="FormulaElectricPowerGenerator">
            {" "}
            P<sub>E</sub> = &rho; ⋅ g ⋅ Q ⋅ [H - ( h<sub>g</sub> + h<sub>j</sub>{" "}
            )] ⋅ e<sub>t</sub>⋅ e<sub>g</sub> ⋅ ( 1 - ƒ<sub>t</sub> ) ⋅ (
            1&nbsp; - ƒ<sub>j</sub> )
          </b>
          <h1 className="FormulaVariables"> Змінні </h1>
          <b className="rho">
            &rho;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;кг/м
            <sup>3</sup>
          </b>
          <span className="rhotext">Густина води</span>
          <input className="rhoinput1" type="number" value={hro} readOnly />
          <b className="g">
            g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м/с
            <sup>2</sup>{" "}
          </b>
          <span className="gtext">Прискорення вільного падіння</span>
          <input className="ginput1" type="number" value={g} readOnly />
          <b className="Q">
            Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;л/с{" "}
          </b>
          <span className="Qtext">Витрата води</span>
          <input className="Qinput" type="number" value={Q1} onChange={calQ1} />
          <b className="DoingNap">
            Н&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м{" "}
          </b>
          <span className="Htext1">Робочий напір</span>
          <input className="Hinput" type="number" value={H1} onChange={calH1} />
          <b className="hg">
            h<sub>g</sub>
          </b>
          <span className="hgtext">Гідравлічні втрати</span>
          <input
            className="hginput"
            type="number"
            value={hg}
            onChange={calhg}
          />
          <b className="hj">
            h<sub>j</sub>
          </b>
          <span className="hjtext">Інші втрати</span>
          <input
            className="hjinput"
            type="number"
            value={hj}
            onChange={calhj}
          />
          <b className="et">
            e<sub>t</sub>
          </b>
          <span className="ettext">
            Коефіцієнт використання при середньому багаторічному стоці Q{" "}
          </span>
          <input
            className="etinput"
            type="number"
            value={et}
            onChange={calet}
          />
          <b className="eg">
            e<sub>g</sub>
          </b>
          <span className="egtext">Eфективність генератора </span>
          <input
            className="eginput"
            type="number"
            value={eg}
            onChange={caleg}
          />
          <b className="ft">
            ƒ<sub>t</sub>
          </b>
          <span className="fttext">Втрати трансформатора </span>
          <input
            className="ftinput"
            type="number"
            value={ft}
            onChange={calft}
          />
          <b className="fj">
            ƒ<sub>j</sub>
          </b>
          <span className="fjtext">Інші втрати електроенергії </span>
          <input
            className="fjinput"
            type="number"
            value={fj}
            onChange={calfj}
          />
          <h1 className="FormulaResultHeaderElectricPowerGenerator">
            {" "}
            Результат Вт:{" "}
          </h1>
          <input
            className="FormulaResultElectricPowerGenerator"
            name="result"
            type="number"
            value={!PE ? PE : PE.toFixed(3)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormulaElectricPowerGenerator"
            onClick={eventCalculate_2}
            value="Обчислити"
          />
          <b className="RecomendVariables">
            {" "}
            Використати рекомендовані значення?{" "}
            <input
              type="checkbox"
              className="qwe"
              onClick={(e) => setchangecheckbox(!changecheckbox)}
            />
          </b>
        </div>
        <div className="СompressionLiquidJet">
          <h1 className="FormulaHeader">
            Коефіцієнт стиснення струменя рідини
          </h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="FormulaCompressionLiquidJet">
            {" "}
            ε =
            <label className="top">
              S<sub>c</sub>{" "}
            </label>
            <label className="bottom">S</label>{" "}
          </b>
          <h1 className="FormulaVariablesCompressionLiquidJet"> Змінні </h1>
          <b className="Sc">
            S<sub>c</sub>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м
            <sup>2</sup>{" "}
          </b>
          <span className="Sctext">Cтиснений переріз струменя</span>
          <input
            className="Scinput"
            type="number"
            value={Sc}
            onChange={calSc}
          />
          <b className="S">
            S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м
            <sup>2</sup>{" "}
          </b>
          <span className="Stext">Переріз данного отвору </span>
          <input className="Sinput" type="number" value={S} onChange={calS} />
          <h1 className="FormulaResultHeaderCompressionLiquidJet">
            {" "}
            Результат:{" "}
          </h1>
          <input
            className="FormulaResultCompressionLiquidJet"
            name="result"
            type="number"
            value={!ε ? ε : ε.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormulaCompressionLiquidJet"
            onClick={eventCalculate_3}
            value="Обчислити"
          />
        </div>

        <div className="CostSpeed">
          <h1 className="FormulaHeader">Коефіцієнт швидкості</h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="FormulaCostSpeed">
            {" "}
            φ<sub>H</sub> ={" "}
            <label className="top1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </label>
            <label className="bottom1">
              α + ζ<sub>TC</sub>{" "}
            </label>{" "}
          </b>
          <lable className="SQRT"> &radic; </lable>

          <h1 className="FormulaVariablesCostSpeed"> Змінні </h1>
          <b className="alpha">α</b>
          <span className="alphatext">
            Коефіцієнт втрат на ділянці від входу в отвір до стисненого перерізу
          </span>
          <input
            className="alphainput"
            type="number"
            value={alpha}
            onChange={calalpha}
          />
          <b className="CTC">
            ζ<sub>TC</sub>
          </b>
          <span className="CTCtext">Коефіцієнт гідравлічних втрат отвору </span>
          <input
            className="CTCinput"
            type="number"
            value={CTC}
            onChange={calCTC}
          />
          <h1 className="FormulaResultHeaderCostSpeed"> Результат: </h1>
          <input
            className="FormulaResultCostSpeed"
            name="result"
            type="number"
            value={!FH ? FH : FH.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormulaCostSpeed"
            onClick={eventCalculate_4}
            value="Обчислити"
          />
          <b className="RecomendVariablesCostSpeed">
            {" "}
            Використати значення для умови утворення виру?{" "}
            <input
              type="checkbox"
              className="qwe"
              onClick={(e) => setchangecheckbox1(!changecheckbox1)}
            />
          </b>
        </div>

        <div className="CostFactor">
          <h1 className="FormulaHeader">Коефіцієнт витрати</h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="Formula">
            {" "}
            μ<sub>H</sub> = ε ⋅ φ<sub>H</sub>{" "}
          </b>
          <h1 className="FormulaVariables"> Змінні </h1>
          <b className="epsilon">ε</b>
          <span className="epsilontext">
            Коефіцієнт стиснення струменя рідини
          </span>
          <input
            className="epsiloninput"
            type="number"
            value={ε1}
            onChange={calε1}
          />
          <b className="FH">
            φ<sub>H</sub>
          </b>
          <span className="FHtext">Коефіцієнт швидкості</span>
          <input
            className="FHinput"
            type="number"
            value={FH1}
            onChange={calFH1}
          />
          <h1 className="FormulaResultHeader"> Результат: </h1>
          <input
            className="FormulaResultCostFactor"
            name="result"
            type="number"
            value={!UH ? UH : UH.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormulaCostFactor"
            onClick={eventCalculate_5}
            value="Обчислити"
          />
          <b className="RecomendVariablesCostSpeed">
            {" "}
            Використати попередньо розраховані значаення?{" "}
            <input
              type="checkbox"
              className="qwe"
              onClick={(e) => setchangecheckbox4(!changecheckbox4)}
            />
          </b>
        </div>

        <div className="CrossSectionalArea">
          <h1 className="FormulaHeader">
            Площа поперечного перерізу данного отвору
          </h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="FormulaCrossSectionalArea">
            {" "}
            S<sub>&part;.o.</sub> ={" "}
            <label className="top2">
              &pi; ⋅ D<sup>2</sup>
            </label>
            <label className="bottom2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </label>{" "}
          </b>
          <h1 className="FormulaVariablesCrossSectionalArea"> Змінні </h1>
          <b className="pi">&pi; </b>
          <span className="pitext">Число pі стала</span>
          <input className="piinput" type="number" value={pi} readOnly />
          <b className="Diametr">D</b>
          <span className="Diametrtext">Діаметр отвору</span>
          <input
            className="Diametrinput"
            type="number"
            value={D}
            onChange={calD}
          />
          <h1 className="FormulaResultHeader">
            {" "}
            Результат м<sup>2</sup>:{" "}
          </h1>
          <input
            className="FormulaResult"
            name="result"
            type="number"
            value={!SDO ? SDO : SDO.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormula"
            onClick={eventCalculate_6}
            value="Обчислити"
          />
        </div>

        <div className="FluidFlowRate">
          <h1 className="FormulaHeader">
            Швидкість витікання рідини з отвору за діаметром
          </h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="FormulaFluidFlowRate">
            {" "}
            V = <label className="top3">4 ⋅ Q</label>
            <label className="bottom3">
              ε ⋅ &pi; ⋅ D<sup>2</sup>
            </label>{" "}
          </b>
          <h1 className="FormulaVariablesFormulaFluidFlowRate"> Змінні </h1>
          <b className="Q1">
            Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;л/с{" "}
          </b>
          <span className="Q1text">Витрата води</span>
          <input
            className="Q1input"
            type="number"
            value={Q2}
            onChange={calQ2}
          />
          <b className="epsilon1">ε</b>
          <span className="epsilon1text">
            Коефіцієнт стиснення струменя рідини
          </span>
          <input
            className="epsilon1input"
            type="number"
            value={!ε ? ε : ε.toFixed(2)}
          />
          <b className="pi1">&pi; </b>
          <span className="pi1text">Число pі стала</span>
          <input className="pi1input" type="number" value={pi} readOnly />
          <b className="Diametr1">
            D<sup>2</sup>
          </b>
          <span className="Diametr1text">Діаметр отвору</span>
          <input
            className="Diametr1input"
            type="number"
            value={D1}
            onChange={calD1}
          />
          <h1 className="FormulaResultHeaderFormulaFluidFlowRate">
            {" "}
            Результат м/с:{" "}
          </h1>
          <input
            className="FormulaResultFormulaFluidFlowRate"
            name="result"
            type="number"
            value={!V ? V : V.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormulaFluidFlowRate"
            onClick={eventCalculate_7}
            value="Обчислити"
          />
          <b className="RecomendVariablesCostSpeed">
            {" "}
            Використати попередньо розраховані значаення?{" "}
            <input
              type="checkbox"
              className="qwe"
              onClick={(e) => setchangecheckbox2(!changecheckbox2)}
            />
          </b>
        </div>

        <div className="RequiredPressure">
          <h1 className="FormulaHeader">Потрібний напір пропуску </h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="FormulaFluidFlowRate">
            {" "}
            H ={" "}
            <label className="top4">
              Q<sup>2</sup>
            </label>
            <label className="bottom4">
              μ<sub>H</sub> <sup>2</sup> ⋅ S<sub>&part;.o.</sub>
              <sup>2</sup> ⋅ 2 ⋅ g
            </label>{" "}
          </b>
          <h1 className="FormulaVariablesRequiredPressure"> Змінні </h1>
          <b className="Q1">
            Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;л/с{" "}
          </b>
          <span className="Q1text">Витрата води</span>
          <input
            className="Q1input"
            type="number"
            value={Q3}
            onChange={calQ3}
          />
          <b className="UH">
            μ<sub>H</sub>
          </b>
          <span className="UHtext">Коефіцієнт витрати</span>
          <input
            className="UHinput"
            type="number"
            value={UH1}
            onChange={calUH1}
          />
          <b className="SDO">
            S<sub>&part;.o.</sub>
          </b>
          <span className="SDOtext">
            Площа поперечного перерізу данного отвору
          </span>
          <input
            className="SDOinput"
            type="number"
            value={SDO1}
            onChange={calSDO1}
          />
          <b className="g1">
            g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м/с
            <sup>2</sup>{" "}
          </b>
          <span className="g1text">Прискорення вільного падіння</span>
          <input className="g1input" type="number" value={g} readOnly />
          <h1 className="FormulaResultHeaderFormulaFluidFlowRate">
            {" "}
            Результат м:{" "}
          </h1>
          <input
            className="FormulaResultFormulaFluidFlowRate"
            name="result"
            type="number"
            value={!HRP ? HRP : HRP.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormulaFluidFlowRate"
            onClick={eventCalculate_8}
            value="Обчислити"
          />
          <b className="RecomendVariablesCostSpeed">
            {" "}
            Використати попередньо розраховані значаення?{" "}
            <input
              type="checkbox"
              className="qwe"
              onClick={(e) => setchangecheckbox3(!changecheckbox3)}
            />
          </b>
        </div>

        <div className="CriticalPressure">
          <h1 className="FormulaHeader">Критичний напір</h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="FormulaCriticalPressure">
            {" "}
            H<sub>кр</sub> = 0.5 ⋅ D ⋅ <label className="ZFF">0,55</label>
            <lable className="SQRT1"> &radic; </lable>
            <lable className="DUSHKI">(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) </lable>
            <label className="top5">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label className="bottom5">g ⋅ D</label>{" "}
          </b>
          <h1 className="FormulaVariablesCriticalPressure"> Змінні </h1>
          <b className="D1">D </b>
          <span className="D1text">Діаметр отвору</span>
          <input
            className="D1input"
            type="number"
            value={D2}
            onChange={calD2}
          />
          <b className="V">V</b>
          <span className="Vtext">Швидкість витікання рідини</span>
          <input className="Vinput" type="number" value={V1} onChange={calV1} />
          <b className="g2">
            g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м/с
            <sup>2</sup>{" "}
          </b>
          <span className="g2text">Прискорення вільного падіння</span>
          <input className="g2input" type="number" value={g} readOnly />
          <h1 className="FormulaResultHeaderCriticalPressure">
            {" "}
            Результат м:{" "}
          </h1>
          <input
            className="FormulaResultFormulaFluidFlowRate"
            name="result"
            type="number"
            value={!HCP ? HCP : HCP.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormulaFluidFlowRate"
            onClick={eventCalculate_9}
            value="Обчислити"
          />
           <b className="RecomendVariablesCostSpeed">
            {" "}
            Використати попередньо розраховані значаення?{" "}
            <input
              type="checkbox"
              className="qwe"
              onClick={(e) => setchangecheckbox5(!changecheckbox5)}
            />
          </b>
        </div>

        <div className="PropellerTurbineSpeed">
          <h1 className="FormulaHeader">
            Швидкість обертання пропелерних турбін
          </h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="FormulaPropellerTurbineSpeed">
            {" "}
            ω = <span className="lineforsqrt">__</span>
            <span className="lineforsqrt2">___</span>
            <label className="top6">
              Z ⋅ &nbsp;&nbsp;&nbsp;
              <span>
                <span className="SQRT2"> &radic;</span>&rho;
              </span>{" "}
              ⋅ (g ⋅H)<sup>5/4</sup>
            </label>
            <label className="bottom6">
              <span className="SQRT3">&radic; </span>P<sub>T</sub>
            </label>{" "}
          </b>
          <h1 className="FormulaVariables"> Змінні </h1>
          <b className="Z">Z</b>
          <span className="Ztext">Коефіцієнт швидкохідності турбіни</span>
          <input className="Zinput" type="number" value={Z} onChange={calZ} />
          <b className="rho1">
            &rho;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;кг/м
            <sup>3</sup>
          </b>
          <span className="rho1text">Густина води</span>
          <input className="rho1input" type="number" value={hro} readOnly />
          <b className="g3">
            g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м/с
            <sup>2</sup>{" "}
          </b>
          <span className="g3text">Прискорення вільного падіння</span>
          <input className="g3input" type="number" value={g} readOnly />
          <b className="DoingNap2">
            Н&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м{" "}
          </b>
          <span className="DoingNap2text">Робочий напір</span>
          <input
            className="DoingNap2input"
            type="number"
            value={H3}
            onChange={calH3}
          />
          <b className="PT1">
            P<sub>T</sub>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;м{" "}
          </b>
          <span className="PT1text">
            Потужність, яка розвивається гідротурбіною
          </span>
          <input
            className="PT1input"
            type="number"
            value={Pt1}
            onChange={calPt1}
          />
          <h1 className="FormulaResultHeader"> Результат рад/с: </h1>
          <input
            className="FormulaResult"
            name="result"
            type="number"
            value={!ω ? ω : ω.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormula"
            onClick={eventCalculate_10}
            value="Обчислити"
          />
          <b className="RecomendVariablesCostSpeed">
            {" "}
            Використати попередньо розраховані значаення?{" "}
            <input
              type="checkbox"
              className="qwe"
              onClick={(e) => setchangecheckbox7(!changecheckbox7)}
            />
          </b>
        </div>

        <div className="TurbineSpeed">
        <h1 className="FormulaHeader">
        Частота обертання турбіни
          </h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="Formula">
            {" "}
            ƒ ={" "}
            <label className="top7">
            ω
            </label>
            <label className="bottom4">
              2 ⋅ &pi;
            </label>{" "}
          </b>
          <h1 className="FormulaVariablesCriticalPressure"> Змінні </h1>
          <b className="ω">ω </b>
          <span className="ωtext">Швидкість обертання пропелерних турбін</span>
          <input
            className="ωinput"
            type="number"
            value={ω1}
            onChange={calω1}
          />
           <b className="pi2">&pi; </b>
          <span className="pi2text">Число pі стала</span>
          <input className="pi2input" type="number" value={pi} readOnly />
          <h1 className="FormulaResultHeaderCriticalPressure">
            {" "}
            Результат Гц:{" "}
          </h1>
          <input
            className="FormulaResultFormulaFluidFlowRate"
            name="result"
            type="number"
            value={!ƒ ? ƒ : ƒ.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormulaFluidFlowRate"
            onClick={eventCalculate_11}
            value="Обчислити"
          />
            <b className="RecomendVariablesCostSpeed">
            {" "}
            Використати попередньо розраховані значаення?{" "}
            <input
              type="checkbox"
              className="qwe"
              onClick={(e) => setchangecheckbox8(!changecheckbox8)}
            />
          </b>
        </div>



        <div className="ReductionReducer"> 
        <h1 className="FormulaHeader">
        Редукція редуктора для генератора ГЕС 
          </h1>
          <h1 className="FormulaText"> Формула </h1>
          <b className="FormulaCriticalPressure">
            {" "}
            ς = ( 50 / ƒ )
          </b>
          <h1 className="FormulaVariablesCriticalPressure"> Змінні </h1>
          <b className="ƒ">ƒ </b>
          <span className="ƒtext">Частота обертання турбіни</span>
          <input
            className="ƒinput"
            type="number"
            value={ƒ1}
            onChange={calƒ1}
          />
          <h1 className="FormulaResultHeaderCriticalPressure">
            {" "}
            Результат:{" "}
          </h1>
          <input
            className="FormulaResultFormulaFluidFlowRate"
            name="result"
            type="number"
            value={!ς ? ς : ς.toFixed(2)}
            readOnly
          />
          <input
            type="submit"
            className="CalculateFormulaFluidFlowRate"
            onClick={eventCalculate_12}
            value="Обчислити"
          />
         </div>
      </div>
    </>
  );
};

export default MP;
