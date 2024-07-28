import Snippet from '../models/Snippet.js';

const getSnippets = async (req, res) => {
    const snippets = await Snippet.find({ user: req.user._id });
    res.json(snippets);
};

const addSnippet = async (req, res) => {
    const { title, code, language, tags } = req.body;
    const snippet = new Snippet({
        title,
        code,
        language,
        tags,
        user: req.user._id,
    });
    await snippet.save();
    res.json(snippet);
};

const updateSnippet = async (req, res) => {
    const { id } = req.params;
    const { title, code, language, tags } = req.body;
    const snippet = await Snippet.findByIdAndUpdate(id, { title, code, language, tags }, { new: true });
    res.json(snippet);
};

const deleteSnippet = async (req, res) => {
    const { id } = req.params;
    await Snippet.findByIdAndDelete(id);
    res.json({ message: 'Snippet deleted' });
};

export { getSnippets, addSnippet, updateSnippet, deleteSnippet };
