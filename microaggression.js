// คำที่อาจบ่งชี้ถึง microaggression
const microaggressionPatterns = [
    // เกี่ยวกับเชื้อชาติและชาติพันธุ์
    { 
        pattern: /พูดภาษาไทยได้ดี(มาก)?(สำหรับ|เพื่อ)/i, 
        category: "เชื้อชาติและชาติพันธุ์",
        explanation: "การชมว่าพูดภาษาได้ดีสำหรับคนกลุ่มหนึ่ง สื่อถึงการคาดหวังต่ำต่อกลุ่มคนนั้น" 
    },
    { 
        pattern: /(คุณ|เธอ)มาจากไหน.*(จริงๆ|แท้จริง)/i, 
        category: "เชื้อชาติและชาติพันธุ์",
        explanation: "การถามถึงที่มาที่แท้จริง อาจสื่อว่าคนนั้นไม่เข้ากับมาตรฐานของ 'คนท้องถิ่น'" 
    },
    { 
        pattern: /ไม่เหมือน(คน|พวก)(จีน|มุสลิม|ฝรั่ง|พม่า|ลาว|เขมร|เกาหลี|ญี่ปุ่น|อินเดีย)/i, 
        category: "เชื้อชาติและชาติพันธุ์",
        explanation: "การบอกว่าไม่เหมือนคนในกลุ่มนั้น เป็นการใช้ภาพเหมารวม" 
    },
    { 
        pattern: /(ดู|เหมือน|คล้าย)(ไม่)?(ใช่|เป็น)(คน|พวก)(ไทย|จีน|มุสลิม|ฝรั่ง|พม่า|ลาว|เขมร|เกาหลี|ญี่ปุ่น|อินเดีย)/i, 
        category: "เชื้อชาติและชาติพันธุ์",
        explanation: "การตัดสินความเป็นชาติพันธุ์จากลักษณะภายนอก" 
    },
    
    // เกี่ยวกับเพศ
    { 
        pattern: /(ผู้หญิง|ผู้ชาย)ไม่(ควร|เก่ง|ถนัด|เหมาะ)/i, 
        category: "เพศสภาพ",
        explanation: "การจำกัดความสามารถหรือบทบาทตามเพศ" 
    },
    { 
        pattern: /เหมือน(ผู้หญิง|ผู้ชาย)/i, 
        category: "เพศสภาพ",
        explanation: "การใช้เพศเป็นเกณฑ์ในการเปรียบเทียบพฤติกรรม" 
    },
    { 
        pattern: /สำหรับ(ผู้หญิง|ผู้ชาย)/i, 
        category: "เพศสภาพ",
        explanation: "การแสดงความคาดหวังที่ต่างกันตามเพศ" 
    },
    { 
        pattern: /(ผู้หญิง|ผู้ชาย)(เก่ง|ถนัด|เหมาะ)(กว่า)/i, 
        category: "เพศสภาพ",
        explanation: "การเปรียบเทียบความสามารถโดยอิงกับเพศสภาพ" 
    },
    
    // เกี่ยวกับรสนิยมทางเพศและเพศสภาพ
    { 
        pattern: /(เกย์|เลสเบี้ยน|ตุ๊ด|กะเทย).*(ไม่เหมือน|ดูไม่ออก)/i, 
        category: "รสนิยมทางเพศและเพศสภาพ",
        explanation: "การคาดหวังว่าคนที่มีรสนิยมทางเพศหรือเพศสภาพหนึ่งควรมีลักษณะภายนอกแบบใดแบบหนึ่ง" 
    },
    { 
        pattern: /แค่(ช่วง|ระยะ).*(ผ่านไป|ทดลอง)/i, 
        category: "รสนิยมทางเพศและเพศสภาพ",
        explanation: "การลดทอนอัตลักษณ์ทางเพศของผู้อื่น" 
    },
    { 
        pattern: /(เมื่อไหร่|ตอนไหน)(จะ)?(เลิก|หาย|หยุด|เปลี่ยน)/i, 
        category: "รสนิยมทางเพศและเพศสภาพ",
        explanation: "การมองว่าอัตลักษณ์ทางเพศเป็นสิ่งที่ควรเปลี่ยนหรือแก้ไข" 
    },
    
    // เกี่ยวกับศาสนาและความเชื่อ
    { 
        pattern: /(ศาสนา|ความเชื่อ).*(งมงาย|ล้าสมัย)/i, 
        category: "ศาสนาและความเชื่อ",
        explanation: "การดูถูกศาสนาหรือความเชื่อของผู้อื่น" 
    },
    { 
        pattern: /(พวก|คน)(มุสลิม|พุทธ|คริสต์).*(ทั้งหมด|ทั้งนั้น|เหมือนกันหมด)/i, 
        category: "ศาสนาและความเชื่อ",
        explanation: "การเหมารวมคนที่นับถือศาสนาใดศาสนาหนึ่ง" 
    },
    
    // เกี่ยวกับท้องถิ่นและชนบท
    { 
        pattern: /สำหรับคนจาก(ชนบท|ต่างจังหวัด|อีสาน|ใต้|เหนือ)/i, 
        category: "ท้องถิ่นและชนบท",
        explanation: "การแสดงความคาดหวังต่ำต่อคนจากพื้นที่บางแห่ง" 
    },
    { 
        pattern: /(ชนบท|ต่างจังหวัด|บ้านนอก).*(ล้าหลัง|ไม่ทันสมัย)/i, 
        category: "ท้องถิ่นและชนบท",
        explanation: "การมองภูมิภาคหรือท้องถิ่นด้วยภาพเหมารวมเชิงลบ" 
    },
    
    // การปฏิเสธ microaggression
    { 
        pattern: /ฉันไม่ได้(เหยียด|กีดกัน|มีอคติ)/i, 
        category: "การปฏิเสธ microaggression",
        explanation: "การปฏิเสธการเหยียดหรืออคติโดยไม่พิจารณาผลกระทบของคำพูด" 
    },
    { 
        pattern: /มีเพื่อนเป็น(คน|พวก)/i, 
        category: "การปฏิเสธ microaggression",
        explanation: "การอ้างมิตรภาพกับคนกลุ่มใดกลุ่มหนึ่งเพื่อปกป้องตัวเองจากข้อกล่าวหาเรื่องอคติ" 
    },
    
    // การขยายความ
    { 
        pattern: /(พวกเขา|พวกคุณ|พวกมัน).*(ทั้งหมด|เหมือนกันหมด)/i, 
        category: "การเหมารวม",
        explanation: "การเหมารวมคนทั้งกลุ่ม" 
    },
    { 
        pattern: /(พวก|คน)(เกย์|เลสเบี้ยน|กะเทย|ตุ๊ด).*(ทั้งนั้น|ทั้งหมด|เหมือนกันหมด)/i, 
        category: "การเหมารวม",
        explanation: "การเหมารวมคนตามอัตลักษณ์ทางเพศ" 
    }
];

// ฟังก์ชันสำหรับตรวจสอบ microaggression
function analyzeMicroaggression(text) {
    const results = {
        isMicroaggression: false,
        matches: []
    };
    
    // ตรวจสอบรูปแบบทั้งหมดที่อาจพบใน text
    for (const pattern of microaggressionPatterns) {
        if (pattern.pattern.test(text)) {
            results.isMicroaggression = true;
            results.matches.push({
                pattern: pattern.pattern.toString(),
                category: pattern.category,
                explanation: pattern.explanation
            });
        }
    }
    
    return results;
}

// ฟังก์ชันสำหรับแสดงผลลัพธ์
function displayResults(results, text) {
    const resultMicro = document.getElementById('resultMicroaggression');
    const resultNonMicro = document.getElementById('resultNonMicroaggression');
    
    if (results.isMicroaggression) {
        // สร้าง HTML สำหรับแสดงผลลัพธ์
        let explanationHTML = '<div class="detected-patterns">';
        
        // จัดกลุ่มผลลัพธ์ตามหมวดหมู่
        const categorizedResults = {};
        
        for (const match of results.matches) {
            if (!categorizedResults[match.category]) {
                categorizedResults[match.category] = [];
            }
            categorizedResults[match.category].push(match);
        }
        
        // สร้าง HTML สำหรับแต่ละหมวดหมู่
        for (const category in categorizedResults) {
            explanationHTML += `<div class="category"><h3>${category}</h3>`;
            
            for (const match of categorizedResults[category]) {
                explanationHTML += `<p class="explanation">${match.explanation}</p>`;
            }
            
            explanationHTML += '</div>';
        }
        
        explanationHTML += '</div>';
        
        // แสดงผลลัพธ์
        document.getElementById('microText').textContent = `"${text}"`;
        document.getElementById('microExplanation').innerHTML = explanationHTML;
        
        resultMicro.style.display = 'block';
        resultNonMicro.style.display = 'none';
        
        // แสดงการแนะนำการปรับปรุงข้อความ
        showSuggestions(text, results);
    } else {
        document.getElementById('nonMicroText').textContent = `"${text}" ไม่พบรูปแบบของ microaggression ในข้อความนี้`;
        resultMicro.style.display = 'none';
        resultNonMicro.style.display = 'block';
        
        // ซ่อนส่วนแนะนำ
        document.getElementById('suggestionSection').style.display = 'none';
    }
}

// ฟังก์ชันสำหรับแนะนำการปรับปรุงข้อความ
function showSuggestions(text, results) {
    const suggestionSection = document.getElementById('suggestionSection');
    
    if (!suggestionSection) {
        // สร้างส่วนแนะนำหากยังไม่มี
        const newSection = document.createElement('div');
        newSection.id = 'suggestionSection';
        newSection.className = 'suggestion-section';
        newSection.innerHTML = `
            <h3>คำแนะนำในการปรับปรุงข้อความ</h3>
            <div id="suggestions"></div>
        `;
        
        document.getElementById('resultMicroaggression').appendChild(newSection);
    } else {
        suggestionSection.style.display = 'block';
    }
    
    const suggestionsElement = document.getElementById('suggestions');
    suggestionsElement.innerHTML = '';
    
    // สร้างคำแนะนำตามประเภทของ microaggression ที่พบ
    for (const match of results.matches) {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        
        let suggestion = '';
        
        // สร้างคำแนะนำตามหมวดหมู่
        switch (match.category) {
            case "เชื้อชาติและชาติพันธุ์":
                suggestion = 'พยายามหลีกเลี่ยงการตั้งสมมติฐานเกี่ยวกับชาติพันธุ์หรือถิ่นกำเนิดของผู้อื่นจากลักษณะภายนอก';
                break;
            case "เพศสภาพ":
                suggestion = 'หลีกเลี่ยงการกำหนดความสามารถหรือบทบาทตามเพศสภาพ เช่น การระบุว่าบางอาชีพหรือทักษะเหมาะกับเพศใดเพศหนึ่ง';
                break;
            case "รสนิยมทางเพศและเพศสภาพ":
                suggestion = 'เคารพอัตลักษณ์ทางเพศของผู้อื่นโดยไม่ตั้งคำถามหรือตั้งสมมติฐานว่าเป็นเพียงช่วงหนึ่งของชีวิต';
                break;
            case "ศาสนาและความเชื่อ":
                suggestion = 'ให้ความเคารพต่อความเชื่อทางศาสนาของผู้อื่น แม้จะแตกต่างจากความเชื่อของตนเอง';
                break;
            case "ท้องถิ่นและชนบท":
                suggestion = 'หลีกเลี่ยงการประเมินค่าหรือตั้งความคาดหวังต่ำต่อคนจากพื้นที่หรือภูมิภาคต่างๆ';
                break;
            case "การปฏิเสธ microaggression":
                suggestion = 'แทนที่จะปฏิเสธว่าไม่ได้เหยียด ให้รับฟังและทำความเข้าใจผลกระทบของคำพูดที่มีต่อผู้อื่น';
                break;
            case "การเหมารวม":
                suggestion = 'หลีกเลี่ยงการใช้คำว่า "ทั้งหมด" "เหมือนกันหมด" เมื่อพูดถึงกลุ่มคน';
                break;
            default:
                suggestion = 'ทบทวนและตระหนักถึงผลกระทบของคำพูดที่อาจมีต่อความรู้สึกของผู้อื่น';
        }
        
        suggestionItem.textContent = suggestion;
        suggestionsElement.appendChild(suggestionItem);
    }
}

// ฟังก์ชันสำหรับบันทึกข้อมูลการวิเคราะห์
function saveAnalysisData(text, results) {
    // ตรวจสอบว่า localStorage พร้อมใช้งานหรือไม่
    if (typeof(Storage) !== "undefined") {
        let analysisHistory = JSON.parse(localStorage.getItem('microaggressionAnalysisHistory') || '[]');
        
        // เพิ่มข้อมูลการวิเคราะห์ใหม่
        analysisHistory.push({
            text: text,
            results: results,
            timestamp: new Date().toISOString()
        });
        
        // จำกัดจำนวนประวัติที่เก็บไว้ (เก็บแค่ 20 รายการล่าสุด)
        if (analysisHistory.length > 20) {
            analysisHistory = analysisHistory.slice(-20);
        }
        
        // บันทึกลงใน localStorage
        localStorage.setItem('microaggressionAnalysisHistory', JSON.stringify(analysisHistory));
        
        // อัปเดตการแสดงประวัติหากมีส่วนนี้ในหน้าเว็บ
        if (document.getElementById('analysisHistory')) {
            displayAnalysisHistory();
        }
    }
}

// ฟังก์ชันสำหรับแสดงประวัติการวิเคราะห์
function displayAnalysisHistory() {
    const historyElement = document.getElementById('analysisHistory');
    
    if (!historyElement) return;
    
    // ดึงข้อมูลประวัติจาก localStorage
    const analysisHistory = JSON.parse(localStorage.getItem('microaggressionAnalysisHistory') || '[]');
    
    if (analysisHistory.length === 0) {
        historyElement.innerHTML = '<p>ยังไม่มีประวัติการวิเคราะห์</p>';
        return;
    }
    
    // สร้างตารางแสดงประวัติ
    let historyHTML = `
        <table class="history-table">
            <thead>
                <tr>
                    <th>วันที่</th>
                    <th>ข้อความ</th>
                    <th>ผลการวิเคราะห์</th>
                    <th>การจัดการ</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // เรียงลำดับประวัติจากใหม่ไปเก่า
    analysisHistory.reverse().forEach((item, index) => {
        const date = new Date(item.timestamp);
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        
        historyHTML += `
            <tr>
                <td>${formattedDate}</td>
                <td>${item.text.length > 30 ? item.text.substring(0, 30) + '...' : item.text}</td>
                <td>${item.results.isMicroaggression ? '<span class="detected">พบ</span>' : '<span class="not-detected">ไม่พบ</span>'}</td>
                <td>
                    <button class="view-btn" data-index="${index}">ดู</button>
                    <button class="delete-btn" data-index="${index}">ลบ</button>
                </td>
            </tr>
        `;
    });
    
    historyHTML += `
            </tbody>
        </table>
    `;
    
    historyElement.innerHTML = historyHTML;
    
    // เพิ่ม event listener สำหรับปุ่มดูและลบ
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = analysisHistory.length - 1 - parseInt(this.getAttribute('data-index'));
            const item = analysisHistory[index];
            
            // นำข้อความไปใส่ในช่องข้อความและวิเคราะห์อีกครั้ง
            document.getElementById('textInput').value = item.text;
            document.getElementById('analyzeBtn').click();
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = analysisHistory.length - 1 - parseInt(this.getAttribute('data-index'));
            
            // ลบรายการออกจากประวัติ
            analysisHistory.splice(index, 1);
            
            // บันทึกประวัติที่อัปเดตแล้ว
            localStorage.setItem('microaggressionAnalysisHistory', JSON.stringify(analysisHistory));
            
            // อัปเดตการแสดงผล
            displayAnalysisHistory();
        });
    });
}

// เพิ่ม event listener เมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', function() {
    // เพิ่ม event listener สำหรับปุ่มวิเคราะห์
    document.getElementById('analyzeBtn').addEventListener('click', function() {
        const text = document.getElementById('textInput').value.trim();
        
        if (!text) {
            alert('กรุณาใส่ข้อความที่ต้องการวิเคราะห์');
            return;
        }
        
        // วิเคราะห์ข้อความ
        const results = analyzeMicroaggression(text);
        
        // แสดงผลลัพธ์
        displayResults(results, text);
        
        // บันทึกข้อมูลการวิเคราะห์
        saveAnalysisData(text, results);
    });
    
    // สร้างส่วนประวัติการวิเคราะห์หากยังไม่มี
    if (!document.getElementById('analysisHistory')) {
        const historySection = document.createElement('div');
        historySection.className = 'history-section';
        historySection.innerHTML = `
            <h3>ประวัติการวิเคราะห์</h3>
            <div id="analysisHistory"></div>
        `;
        
        document.querySelector('.container').appendChild(historySection);
    }
    
    // แสดงประวัติการวิเคราะห์
    displayAnalysisHistory();
    
    // เพิ่มฟังก์ชันค้นหาภายในแพตเทิร์น
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <h3>ค้นหาแพตเทิร์น Microaggression</h3>
        <div class="search-box">
            <input type="text" id="patternSearch" placeholder="พิมพ์คำค้นหา...">
            <button id="searchBtn">ค้นหา</button>
        </div>
        <div id="searchResults" class="search-results"></div>
    `;
    
    document.querySelector('.examples').after(searchContainer);
    
    // เพิ่ม event listener สำหรับการค้นหา
    document.getElementById('searchBtn').addEventListener('click', function() {
        const searchTerm = document.getElementById('patternSearch').value.trim().toLowerCase();
        
        if (!searchTerm) {
            alert('กรุณาใส่คำค้นหา');
            return;
        }
        
        const searchResults = microaggressionPatterns.filter(pattern => {
            return pattern.explanation.toLowerCase().includes(searchTerm) || 
                   pattern.category.toLowerCase().includes(searchTerm) ||
                   pattern.pattern.toString().toLowerCase().includes(searchTerm);
        });
        
        displaySearchResults(searchResults);
    });
});

// ฟังก์ชันแสดงผลการค้นหา
function displaySearchResults(results) {
    const searchResultsElement = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResultsElement.innerHTML = '<p>ไม่พบแพตเทิร์นที่ตรงกับคำค้นหา</p>';
        return;
    }
    
    let resultsHTML = '<div class="result-items">';
    
    // จัดกลุ่มผลลัพธ์ตามหมวดหมู่
    const categorizedResults = {};
    
    for (const result of results) {
        if (!categorizedResults[result.category]) {
            categorizedResults[result.category] = [];
        }
        categorizedResults[result.category].push(result);
    }
    
    // สร้าง HTML สำหรับแต่ละหมวดหมู่
    for (const category in categorizedResults) {
        resultsHTML += `<div class="category"><h4>${category}</h4>`;
        
        for (const result of categorizedResults[category]) {
            resultsHTML += `
                <div class="result-item">
                    <p>${result.explanation}</p>
                    <small>แพตเทิร์น: ${result.pattern.toString().replace(/\//g, '')}</small>
                </div>
            `;
        }
        
        resultsHTML += '</div>';
    }
    
    resultsHTML += '</div>';
    
    searchResultsElement.innerHTML = resultsHTML;
}