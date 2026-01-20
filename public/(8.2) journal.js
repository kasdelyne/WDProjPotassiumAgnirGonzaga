window.onload = function() {
  const saved = JSON.parse(localStorage.getItem("journalEntries")) || [];
  saved.forEach((entry, index) =>
    displayEntry(entry.title, entry.text, entry.date, entry.editedDate, entry.originalText, index)
  );
};

function addEntry() {
  const titleInput = document.getElementById('journalTitle');
  const textInput = document.getElementById('journalInput');
  const title = titleInput.value.trim();
  const text = textInput.value.trim();
  if (title === '' || text === '') return;

  const date = new Date().toLocaleString();
  const saved = JSON.parse(localStorage.getItem("journalEntries")) || [];
  saved.unshift({ title, text, date, editedDate: null, originalText: null });
  localStorage.setItem("journalEntries", JSON.stringify(saved));

  displayEntry(title, text, date, null, null, 0);
  titleInput.value = '';
  textInput.value = '';
}

function displayEntry(title, text, date, editedDate, originalText, index) {
  const entriesDiv = document.getElementById('entries');
  const entry = document.createElement('div');
  entry.className = 'entry';

  const heading = document.createElement('h3');
  heading.textContent = title;

  const dateLabel = document.createElement('small');
  dateLabel.textContent = "Created: " + date;

  const editedLabel = document.createElement('div');
  editedLabel.className = 'edited';
  if (editedDate) editedLabel.textContent = "Edited: " + editedDate;

  const originalWrapper = document.createElement('div');
  originalWrapper.className = 'original';
  if (originalText) {
    const viewBtn = document.createElement('button');
    viewBtn.textContent = "View Original";
    viewBtn.style.backgroundColor = "#d54f9f";
    viewBtn.style.marginTop = "5px";

    const originalContent = document.createElement('p');
    originalContent.textContent = originalText;
    originalContent.style.display = "none";

    viewBtn.onclick = (e) => {
      e.stopPropagation();
      originalContent.style.display =
        originalContent.style.display === "none" ? "block" : "none";
      viewBtn.textContent =
        originalContent.style.display === "block" ? "Hide Original" : "View Original";
    };

    originalWrapper.appendChild(viewBtn);
    originalWrapper.appendChild(originalContent);
  }

  const content = document.createElement('p');
  content.textContent = text;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";
  editBtn.onclick = (e) => {
    e.stopPropagation();
    toggleEditFields(entry);
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = (e) => {
    e.stopPropagation();
    deleteEntry(index, entry);
  };

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  const editFields = document.createElement('div');
  editFields.className = 'edit-fields';
  const editTitleInput = document.createElement('input');
  editTitleInput.value = title;
  const editTextInput = document.createElement('textarea');
  editTextInput.value = text;
  const saveBtn = document.createElement('button');
  saveBtn.textContent = "Save Changes";
  saveBtn.onclick = (e) => {
    e.stopPropagation();
    saveEdit(index, heading, content, editTitleInput.value, editTextInput.value, editedLabel, originalWrapper, text);
    editFields.style.display = "none";
  };
  editFields.appendChild(editTitleInput);
  editFields.appendChild(editTextInput);
  editFields.appendChild(saveBtn);

  entry.appendChild(heading);
  entry.appendChild(dateLabel);
  entry.appendChild(editedLabel);
  entry.appendChild(originalWrapper);
  entry.appendChild(content);
  entry.appendChild(actions);
  entry.appendChild(editFields);

  entry.addEventListener('click', () => {
    entry.classList.toggle('open');
  });

  entriesDiv.prepend(entry);
}

function deleteEntry(index, entryElement) {
  let saved = JSON.parse(localStorage.getItem("journalEntries")) || [];
  saved.splice(index, 1);
  localStorage.setItem("journalEntries", JSON.stringify(saved));
  entryElement.remove();
}

function toggleEditFields(entry) {
  const editFields = entry.querySelector('.edit-fields');
  editFields.style.display = editFields.style.display === "block" ? "none" : "block";
}

function saveEdit(index, headingEl, contentEl, newTitle, newText, editedLabel, originalWrapper, oldText) {
  let saved = JSON.parse(localStorage.getItem("journalEntries")) || [];
  const entry = saved[index];

  if (!entry.originalText) {
    entry.originalText = oldText;
  }

  entry.title = newTitle.trim();
  entry.text = newText.trim();
  entry.editedDate = new Date().toLocaleString();
  saved[index] = entry;
  localStorage.setItem("journalEntries", JSON.stringify(saved));

  headingEl.textContent = entry.title;
  contentEl.textContent = entry.text;
  editedLabel.textContent = "Edited: " + entry.editedDate;
  editedLabel.style.display = "block";

  if (entry.originalText && originalWrapper.childNodes.length === 0) {
    const viewBtn = document.createElement('button');
    viewBtn.textContent = "View Original";
    viewBtn.style.backgroundColor = "#d54f9f";
    viewBtn.style.marginTop = "5px";

    const originalContent = document.createElement('p');
    originalContent.textContent = entry.originalText;
    originalContent.style.display = "none";

    viewBtn.onclick = (e) => {
      e.stopPropagation();
      originalContent.style.display =
        originalContent.style.display === "none" ? "block" : "none";
      viewBtn.textContent =
        originalContent.style.display === "block" ? "Hide Original" : "View Original";
    };

    originalWrapper.appendChild(viewBtn);
    originalWrapper.appendChild(originalContent);
  }
}
 