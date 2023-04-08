import React from "react";

export default function Gallery () {
    return (
        <section id="gallery">
            <div class="accordion">
                <div class="panel active-panel">
                    <h2 id="panel1-heading"><button
                        class="accordion-trigger"
                        aria-controls="panel1-content"
                        aria-expanded="true"
                        >
                        <span class="material-symbols-outlined accordion-icon">shower</span>
                    </button></h2>
                    
                    <div 
                    class="panel-content" 
                    id="panel1-content"
                    aria-labelledby="panel1-heading"
                    role="region"
                    >
                        <h2 class="panel-title" id="panel1-title">Bathrooms</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="panel">
                    <h2 id="panel2-heading"><button
                        class="accordion-trigger"
                        aria-controls="panel2-content"
                        aria-expanded="false"
                        >
                        <span class="material-symbols-outlined accordion-icon">shower</span>
                    </button></h2>
                    
                    <div 
                    class="panel-content" 
                    id="panel2-content"
                    aria-labelledby="panel2-heading"
                    role="region"
                    >
                        <h2 class="panel-title" id="panel2-title">Bathrooms</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="panel">
                    <h2 id="panel3-heading"><button
                        class="accordion-trigger"
                        aria-controls="panel3-content"
                        aria-expanded="false"
                        >
                        <span class="material-symbols-outlined accordion-icon">shower</span>
                    </button></h2>
                    
                    <div 
                    class="panel-content" 
                    id="panel3-content"
                    aria-labelledby="panel3-heading"
                    role="region"
                    >
                        <h2 class="panel-title" id="panel3-title">Bathrooms</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="panel">
                    <h2 id="panel4-heading"><button
                        class="accordion-trigger"
                        aria-controls="panel4-content"
                        aria-expanded="false"
                        >
                        <span class="material-symbols-outlined accordion-icon">shower</span>
                    </button></h2>
                    
                    <div 
                    class="panel-content" 
                    id="panel4-content"
                    aria-labelledby="panel4-heading"
                    role="region"
                    >
                        <h2 class="panel-title" id="panel4-title">Bathrooms</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}