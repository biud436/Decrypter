/**
 * @author biud436
 */

export type EnigmaFileArchiveParameter = {
  filename: string;
  originalSize: number;
  fileIndex: number;
  treeIndex: number;
  numberOfFiles: number;
  fileSize: number;
  isFile: boolean;
  fileOffset: number;
  fileAttribute: number;
};

export class EnigmaFileArchive {
  public _filename: string;
  public _originalSize: number;
  public _fileIndex: number;
  public _treeIndex: number;
  public _numberOfFiles: number;
  public _fileSize: number;
  public _isFile: boolean;
  public _fileOffset: number;
  public _fileAttribute: number;

  public _rawOffset: number;
  public _filePath: string;
  public _children: EnigmaFileArchive[];
  public _parent: Partial<EnigmaFileArchive> | null;
  /**
   * @param {{
   *          filename:string,
   *          originalSize:Number,
   *          fileIndex:Number,
   *          treeIndex:Number,
   *          numberOfFiles:Number,
   *          fileSize: Number,
   *          isFile: Boolean,
   *          fileOffset: Number,
   *          fileAttribute: Number,
   *         }} data
   */
  constructor(data: EnigmaFileArchiveParameter) {
    this._filename = data.filename;
    this._originalSize = data.originalSize;
    this._fileIndex = data.fileIndex;
    this._treeIndex = data.treeIndex;
    this._numberOfFiles = data.numberOfFiles;
    this._fileSize = data.fileSize;
    this._isFile = data.isFile;
    this._rawOffset = data.fileOffset;
    this._fileAttribute = data.fileAttribute;

    /**
     * @type {Buffer}
     */
    this._filePath = data.filename;

    /**
     * @type {EnigmaFileArchive[]}
     */
    this._children = [];

    /**
     * @type {EnigmaFileArchive}
     */
    this._parent = null;
  }

  isFile() {
    return this._isFile;
  }
}

module.exports = EnigmaFileArchive;
