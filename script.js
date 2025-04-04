function createSkeletonTable() {
  const tableContainer = document.querySelector('.table-skeleton');
  
  // Create 9 more rows (since we already have one data row in HTML)
  for (let i = 0; i < 9; i++) {
    const row = document.createElement('div');
    row.className = 'skeleton-row';
    
    // Create 5 cells for each row
    for (let j = 0; j < 5; j++) {
      const cell = document.createElement('div');
      cell.className = 'skeleton-cell';
      
      const content = document.createElement('div');
      content.className = 'skeleton-content';
      
      cell.appendChild(content);
      row.appendChild(cell);
    }
    
    tableContainer.appendChild(row);
  }
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', createSkeletonTable); 